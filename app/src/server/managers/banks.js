'use strict';
const web3 = require('web3');
const path = require('path');
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
        let nonce = await web3Instance.eth.getTransactionCount(config.ethereum.WALLET_ADDRESS);
        nftContract.methods.addBank(web3.utils.fromAscii(req.body.name), req.body.wallet_address, web3.utils.fromAscii(req.body.rn))
        .send({nonce:nonce, from: config.ethereum.WALLET_ADDRESS})
        .then((result) =>{
          Bank.create({name: req.body.name, wallet_address: req.body.wallet_address, rg_number: req.body.rn, eth_transaction_id: result.transactionHash})
          .then((bankresult) => {
             resolve(bankresult);
          }).catch((bankerror) =>{
            console.log("Bank error", bankerror);
            reject(bankerror);
          });
        }).catch((error) => {
          console.log("blockchain error", error.message);
          reject({message:error.message});
        });
    });
  }

  Banks.prototype["list"] = function(req){
    return new Promise( (resolve, reject)  =>{
      var Bank = global_wagner.get('Bank');
      Bank.scope(['active']).findAll().then((banks) => {
        resolve(banks);
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
      let nonce = await web3Instance.eth.getTransactionCount(config.ethereum.WALLET_ADDRESS);
      nftContract.methods.removeBank(params.wallet_address)
      .send({nonce:nonce, from: config.ethereum.WALLET_ADDRESS})
      .then((result) =>{
        console.log("rrresult", result);
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

  return Banks;

})();

module.exports = Banks;

