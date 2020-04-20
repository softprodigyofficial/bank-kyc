'use strict';
const path = require('path');
const async = require('async');
const bcrypt  = require("bcryptjs");
const request = require("request");
const Promise   = require('bluebird');
const config    = require('config');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const Customers = (function(){
	let global_wagner, sequelize;
	
	function Customers(wagner){
		global_wagner = wagner;
        sequelize = require(path.join(__dirname,'../utils/db'))(global_wagner);
	}

	Customers.prototype["add"] = function(req){
	   return new Promise( (resolve, reject)=>{
          var Customer = global_wagner.get('Customer');
          Customer.create({ username: req.body.username, user_data: req.body.data, wallet_address: req.body.wallet_address , rating: 0 , votes: 0 , is_active: true})
          .then((result) => {
            resolve(result);
          }).catch((error) => {
            reject(error);
          });
	   }); 
	}

	return Customers;

})();

module.exports = Customers;