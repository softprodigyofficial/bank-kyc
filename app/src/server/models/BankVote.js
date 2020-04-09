module.exports = function(sequelize, DataTypes) {

    var bcrypt      = require("bcryptjs");
    var fs          = require('fs');
    var path        = require('path');

    var bank_vote_fields = require(path.join(__dirname, './entity/bankVote.js'));
    var bank_vote_meta   = require(path.join(__dirname, './table/bankVote.js'));
    var BankVote        = sequelize.define('BankVote', bank_vote_fields(),bank_vote_meta());

    return BankVote;

};