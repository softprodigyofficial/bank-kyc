module.exports = function(sequelize, DataTypes) {

    var bcrypt      = require("bcryptjs");
    var fs          = require('fs');
    var path        = require('path');

    var customer_fields = require(path.join(__dirname, './entity/customer.js'));
    var customer_meta   = require(path.join(__dirname, './table/customer.js'));
    var Customer        = sequelize.define('Customer', customer_fields(),customer_meta());

    return Customer;

};