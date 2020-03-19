'use strict';
const path = require('path');
const request = require("request");
const Promise   = require('bluebird');
const config    = require('config');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const Users = (function(){
   var global_wagner, sequelize, passport;

   function Users(wagner){
   	 global_wagner = wagner;
     sequelize = require(path.join(__dirname,'../utils/db'))(global_wagner);
   	 passport = require(path.join(__dirname,'../utils/dependencies'))(global_wagner);
   }

   Users.prototype["admin_login"] = function(req, passport){
   	return new Promise((resolve, reject)=> {
        passport.authenticate("local"), function(req, res) {
        	resolve(res.json(res));
        }
   	});
   }

   return Users;
})();

module.exports = Users;