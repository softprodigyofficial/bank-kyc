'use strict';
require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const web3 = require('web3');
const wagner  = require('wagner-core');
const async   = require('async');
const config  = require('config');

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

console.log("nft contract", nftContract);