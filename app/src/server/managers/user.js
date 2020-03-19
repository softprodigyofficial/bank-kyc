'use strict';
const Promise   = require('bluebird');
const config    = require('config');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const Users = (function(){
   var global_wagner, sequelize;

   function Users(wagner){
   	 global_wagner = wagner;
   	 sequelize = require(path.join(__dirname,'../../utils/db'))(global_wagner);
   }

   Users.prototype["admin_login"] = function(req){
   	return new Promise((resolve, reject)=> {
        var passport = global_wagner.get('passport');
        passport.authenticate("local"), function(req, res) {
        	resolve(res.json(res));
        }
   	});
   }

})();

module.exports = Users;