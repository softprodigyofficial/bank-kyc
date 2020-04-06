'use strict';
const web3 = require('web3');
const path = require('path');
const request = require("request");
const Promise   = require('bluebird');
const config    = require('config');
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Sequelize = require('sequelize');



const Banks = (function(){
   var global_wagner, sequelize;

    function Banks(wagner){
     	global_wagner = wagner;
      sequelize = require(path.join(__dirname,'../utils/db'))(global_wagner);
      
    }

    const NFT_ABI = [{
          "constant": false,
          "inputs": [
              {
                "internalType": "bytes32",
                "name": "n",
                "type": "bytes32"
              },
              {
                "internalType": "address",
                "name": "e",
                "type": "address"
              },
              {
                "internalType": "bytes32",
                "name": "rn",
                "type": "bytes32"
              }
          ],
          "name": "addBank",
          "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
      }];
      const provider = new HDWalletProvider(config.ethereum.MNEMONIC, config.ethereum.NETWORK);
      const web3Instance = new web3( provider );
      const nftContract = new web3Instance.eth.Contract(NFT_ABI, config.ethereum.NFT_CONTRACT_ADDRESS, { gasLimit: "1000000" });
     console.log("contract",nftContract);
   
  Banks.prototype["add"] = function(req){
    return new Promise( (resolve, reject) => {
      var Bank = global_wagner.get('Bank');
        console.log(req.body);
        nftContract.methods.addBank(web3.utils.fromAscii(req.body.name), req.body.wallet_address, web3.utils.fromAscii(req.body.rn))
        .send({from: config.ethereum.WALLET_ADDRESS})
        .then((result) =>{
          Bank.create({name: req.body.name, rg_number: req.body.rn, eth_transaction_id: result.transactionHash})
          .then((bankresult) => {
             resolve(bankresult);
          }).catch((bankerror) =>{
            console.log("Bank error", bankerror);
            reject(bankerror);
          });
        }).catch((error) => {
          console.log("blockchain error", error);
          reject(error);
        });
    });
  } 
  return Banks;
   
})();

module.exports = Banks;
const Op = Sequelize.Op;