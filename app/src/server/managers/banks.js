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
          await User.create({
            email: req.body.email,
            password: req.body.password,
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

      let bankData =  await Bank.findOne({where:{ wallet_address: params.wallet_address}});
      let nonce = await web3Instance.eth.getTransactionCount(config.ethereum.WALLET_ADDRESS);
      nftContract.methods.removeBank(params.wallet_address)
      .send({nonce:nonce, from: config.ethereum.WALLET_ADDRESS})
      .then( async(result) =>{
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

  return Banks;

})();

module.exports = Banks;
