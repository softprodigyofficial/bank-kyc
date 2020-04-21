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

	Customers.prototype["list"] = function(req){
	    return new Promise( (resolve, reject)=> {
           var Customer = global_wagner.get('Customer');
           Customer.scope(['active']).findAll({where:{wallet_address: req.query.wallet_address }}).then((result) => {
             resolve(result);
           }).catch((error) =>{
           	 reject(error);
           })  
		});
	}

	Customers.prototype["vote"] = function(req){
		return new Promise( (resolve, reject)=> {
           var Customer = global_wagner.get('Customer');
           Customer.update({rating: req.body.rating },{where:{username: req.body.username, wallet_address: req.body.wallet_address}})
		   .then((result) =>{
             resolve(result);
		   }).catch((error) => {
             reject(error);
		   });
		});
	}

	Customers.prototype["view"] = function(req){
		return new Promise( (resolve, reject)=> {
           var Customer = global_wagner.get('Customer');
           Customer.scope(['active']).findOne({where:{id: req.query.id, username: req.query.username }}).then((result)=>{
              resolve(result);
           }).catch((error)=>{
              reject(error);
           }); 
		});
	}

    Customers.prototype["edit"] = function(req){
       return new Promise( (resolve, reject)=> {
	       	var Customer = global_wagner.get('Customer');
	       	Customer.update({user_data: req.body.data, rating: 0, votes: 0}, {where:{username : req.body.username, wallet_address: req.body.wallet_address }})
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