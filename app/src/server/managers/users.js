'use strict';
const path = require('path');
const request = require("request");
const Promise   = require('bluebird');
const config    = require('config');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const Users = (function(){
   var global_wagner, sequelize;

   function Users(wagner){
   	 global_wagner = wagner;
     sequelize = require(path.join(__dirname,'../utils/db'))(global_wagner);
   }
   
   Users.prototype["list"] = function(req) {
    return new Promise((resolve, reject)=>{
       var User = global_wagner.get('User');
       User.scope(["active"]).findAll().then((user) =>{
          resolve(user);
       }).catch((error) => { reject(error); });
    });
   }

  Users.prototype["user"] = function(params) {
     return new Promise((resolve, reject) => {
        var User = global_wagner.get('User');
        var Bank = global_wagner.get('Bank');
        var id = params.id;
        User.scope(['active']).findOne({ where: { id: id },
          include:[{ model: Bank, as: "bank", required: false }]
        }).then((results) => {
          if(results){
          	resolve(results);
          } else {
          	reject(null);
          }
         
        }).catch((error) => { reject(error); }); 
     });
  }

  Users.prototype["wallet-address"] = function(req){
    return new Promise((resolve, reject) => {
      var User = global_wagner.get('User');
      console.log(req.body.wallet_address);
      User.update({wallet_address: req.body.wallet_address },{where: {id: req.body.id }}).then((results) => {
        if(results){
          resolve(req.body.wallet_address);
        } else {
          reject(null);
        }
        
      }).catch((error) => {
        reject(error);
      });
    });
  } 
  return Users;
   
})();

module.exports = Users;
