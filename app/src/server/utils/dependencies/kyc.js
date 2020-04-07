var exports = module.exports={};

exports.abi = [
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "b2bRatings",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "b2cRatings",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "bankAddresses",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "bankRequests",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "username",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "bank",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "data",
        "type": "bytes32"
      },
      {
        "internalType": "bool",
        "name": "isAllowed",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "banks",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "name",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "ethAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "rating",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "kycCount",
        "type": "uint256"
      },
      {
        "internalType": "bytes32",
        "name": "regNumber",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "customers",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "username",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "data",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "rating",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "votes",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "bank",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "finalCustomers",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "username",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "data",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "rating",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "votes",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "bank",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
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
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "a",
        "type": "address"
      }
    ],
    "name": "removeBank",
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
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "u",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "d",
        "type": "bytes32"
      }
    ],
    "name": "addRequest",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "u",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "d",
        "type": "bytes32"
      }
    ],
    "name": "removeRequest",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "a",
        "type": "address"
      }
    ],
    "name": "upvoteBank",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "u",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "p",
        "type": "bytes32"
      }
    ],
    "name": "setCustPassword",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "u",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "d",
        "type": "bytes32"
      }
    ],
    "name": "addCustomer",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "user",
        "type": "bytes32"
      }
    ],
    "name": "removeCustomer",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "u",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "p",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "d",
        "type": "bytes32"
      }
    ],
    "name": "modifyCustomer",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "u",
        "type": "bytes32"
      }
    ],
    "name": "upvoteCust",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "user",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "p",
        "type": "bytes32"
      }
    ],
    "name": "viewCustomer",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "user",
        "type": "bytes32"
      }
    ],
    "name": "getCustRating",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "user",
        "type": "bytes32"
      }
    ],
    "name": "accessHistory",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "a",
        "type": "address"
      }
    ],
    "name": "getBank",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "a",
        "type": "address"
      }
    ],
    "name": "getBankRating",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "a",
        "type": "address"
      }
    ],
    "name": "getBankRequestsNum",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "a",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "i",
        "type": "uint256"
      }
    ],
    "name": "getBankRequest",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];
