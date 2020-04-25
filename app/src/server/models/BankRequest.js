module.exports = function(sequelize, DataTypes) {

    var bcrypt      = require("bcryptjs");
    var fs          = require('fs');
    var path        = require('path');

    var bank_request_fields = require(path.join(__dirname, './entity/bankRequest.js'));
    var bank_request_meta   = require(path.join(__dirname, './table/bankRequest.js'));
    var BankRequest        = sequelize.define('BankRequest', bank_request_fields(),bank_request_meta());

    return BankRequest;

};