'use strict';
const web3 = require('web3');
const path = require('path');
const async = require('async');
const bcrypt  = require("bcryptjs");
const request = require("request");
const Promise   = require('bluebird');
const config    = require('config');
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const Banks = (function(){
  let global_wagner, sequelize, kyc, provider, web3Instance, nftContract;

  function Banks(wagner){
   	global_wagner = wagner;
    sequelize = require(path.join(__dirname,'../utils/db'))(global_wagner);
    kyc = global_wagner.get("KYC");
    provider = new HDWalletProvider(config.ethereum.MNEMONIC, config.ethereum.NETWORK);
    web3Instance = new web3( provider );
    nftContract = new web3Instance.eth.Contract(kyc.abi, config.ethereum.NFT_CONTRACT_ADDRESS, { gasLimit: "2000000" });
  }

  Banks.prototype["add"] = function(req){
    return new Promise(async (resolve, reject) => {
      var Bank = global_wagner.get('Bank');
      var User = global_wagner.get('User');
      var Role = global_wagner.get('Role');
      
      let role = await Role.findOne({where:{name: 'bank'}});
      
      let nonce = await web3Instance.eth.getTransactionCount(config.ethereum.WALLET_ADDRESS);
      
      nftContract.methods.addBank(web3.utils.fromAscii(req.body.name), req.body.wallet_address, web3.utils.fromAscii(req.body.rn))
      .send({nonce:nonce, from: config.ethereum.WALLET_ADDRESS})
      .then((result) =>{
        Bank.create({name: req.body.name, wallet_address: req.body.wallet_address, rg_number: req.body.rn, eth_transaction_id: result.transactionHash})
        .then( async(bankresult) => {
          console.log("Password", req.body.password);
          await User.create({ 
            email: req.body.email, 
            password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null),
            firstName: req.body.name,
            lastName: req.body.name,
            bank_id: bankresult.id,
            role_id: role.id,
            is_active: true
          });
          resolve(bankresult);
        }).catch((bankerror) =>{
          console.log("Bank error", bankerror);
          reject(bankerror);
        });
      }).catch((error) => {
        console.log("blockchain error", error.message);
        reject({message: error.message});
      });
    });
  }

  Banks.prototype["list"] = function(req){
    return new Promise( (resolve, reject)  =>{
      var Bank = global_wagner.get('Bank');
      var banks_array = {};
      Bank.scope(['active']).findAll({ raw: true }).then((banks) => {
        async.forEachOf(banks, function(bankrow, iteratee, cb){
           nftContract.methods.getBankRating(bankrow.wallet_address).call()
           .then((result) => {
              banks[iteratee].rating = result;
              cb();
           }).catch((err) => {
              console.log("blockchain getbankrating error", err);
              banks[iteratee].rating = 0;
              cb();
           });
        }, function(error){
            if(error){ reject(error); }
            console.log(JSON.stringify(banks, null,4));
            resolve(banks);
        });
      }).catch((error) => {
        reject(error);
      });
    });
  }

  Banks.prototype["show"] = function(params){
    return new Promise( (resolve, reject) => {
      nftContract.methods.getBank(params.wallet_address).call()
      .then((result) => {
        result[0] = web3.utils.hexToString(result[0]);
        result[4] = web3.utils.hexToString(result[4]);
        resolve(result);
      }).catch((error) => {
        console.log("blockchain error", error.message);
        reject({message:error.message});
      });
    });
  }

  Banks.prototype["delete"] = function(params){
    return new Promise(async (resolve, reject) =>{
      var Bank = global_wagner.get('Bank');
      var User = global_wagner.get('User');
      var BankVote = global_wagner.get('BankVote');

      let bankData =  await Bank.findOne({where:{ wallet_address: params.wallet_address}});
      let nonce = await web3Instance.eth.getTransactionCount(config.ethereum.WALLET_ADDRESS);
      nftContract.methods.removeBank(params.wallet_address)
      .send({nonce:nonce, from: config.ethereum.WALLET_ADDRESS})
      .then( async(result) =>{
        console.log("rrresult", result);
        await BankVote.destroy({where:{bank_id: bankData.id}});
        await User.destroy({where:{bank_id: bankData.id}});
        Bank.destroy({where:{ wallet_address: params.wallet_address}}).then((resdata)=>{
          resolve(resdata);
        }).catch((error) => {
          reject(error);
        });

      }).catch((error) =>{
        console.log("blockchain error", error.message);
        reject({message:error.message});
      });
    });
  }

  Banks.prototype["upvotebank"] = function(req){
    return new Promise(async (resolve, reject) => {
      var BankVote = global_wagner.get('BankVote');
      var Bank = global_wagner.get('Bank');
      let bankdata = await Bank.scope(['active']).findOne({where:{wallet_address: req.body.wallet_address}, attributes:['id']});
      if(bankdata){
        let isBankVoted = await BankVote.findOne({where:{bank_id: bankdata.id, wallet_address: req.body.bank_session_wallet_address}});
        if(isBankVoted){
          resolve({message: "You have already voted for this bank"});
        } else{
          let nonce = await web3Instance.eth.getTransactionCount(req.body.bank_session_wallet_address);
         console.log("nonce", nonce); 
          nftContract.methods.upvoteBank(req.body.wallet_address)
          .send({nonce:nonce, from: req.body.bank_session_wallet_address})
          .then(async(result) => {
            let bankRating = await nftContract.methods.getBankRating(req.body.wallet_address).call();
            let bankVote = await BankVote.create({
              bank_id: bankdata.id, 
              wallet_address: req.body.bank_session_wallet_address,
              vote: bankRating
             }); 
            resolve(bankVote);
          }).catch((error) => {
            console.log("blockchain error", error.message);
            reject({message:error.message});
          });
        }
      } else {
        reject({message: "Bank does not exist"});  
      }
      
    });
  }

  Banks.prototype["add_bank_request"] = function(req){
    return new Promise(async (resolve, reject) => {
      let reqindex = 0;
      let BankRequest = global_wagner.get('BankRequest');
      let bankData = await BankRequest.findOne({where:{username: req.body.name, wallet_address: req.body.wallet_address }});
      
      if(bankData){
        reqindex = (bankData.request_index + 1);
      }else{
        reqindex = 0;
      }

      BankRequest.create({ username: req.body.name, user_data: req.body.data, wallet_address: req.body.wallet_address, request_index: reqindex, is_allowed: req.body.isallowed })
      .then((result)=>{
        resolve(result);
      }).catch((error) =>{
        reject(error);
      });

    });
  }

  return Banks;

})();

module.exports = Banks;

