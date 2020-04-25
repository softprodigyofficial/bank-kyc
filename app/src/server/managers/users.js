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
   
   return Users;

})();

module.exports = Users;
