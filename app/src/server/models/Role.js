module.exports = function(sequelize, DataTypes) {

    var fs          = require('fs');
    var path        = require('path');

    var role_fields = require(path.join(__dirname, './entity/role.js'));
    var role_meta   = require(path.join(__dirname, './table/role.js'));
    var Role        = sequelize.define('Role', role_fields(),role_meta());

    return Role;

};