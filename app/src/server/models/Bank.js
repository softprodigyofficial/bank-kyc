module.exports = function(sequelize, DataTypes) {

    var bcrypt      = require("bcryptjs");
    var fs          = require('fs');
    var path        = require('path');

    var bank_fields = require(path.join(__dirname, './entity/bank.js'));
    var bank_meta   = require(path.join(__dirname, './table/bank.js'));
    var Bank        = sequelize.define('Bank', bank_fields(),bank_meta());

    return Bank;

};