'use strict';
const path = require('path');
const request = require("request");
const Promise   = require('bluebird');
const config    = require('config');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const passport = require('./passport');

const Users = (function(){
   var global_wagner, sequelize;

   function Users(wagner){
   	 global_wagner = wagner;
     sequelize = require(path.join(__dirname,'../utils/db'))(global_wagner);
   	 // passport = require(path.join(__dirname,'../utils/dependencies'))(global_wagner);
     // console.log("************");
     // console.log(passport);
   }

   Users.prototype["admin_login"] = function(req, passport){
   	return new Promise((resolve, reject)=> {
      console.log("passport", passport);
        passport.authenticate("local").then((result) => {
          resolve(result);
        }).catch((error) =>{
           reject(error);
        })
   	});
   }

   return Users;
})();

module.exports = Users;