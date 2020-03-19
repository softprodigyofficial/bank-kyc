module.exports = function(sequelize, DataTypes) {

    var fs              = require('fs');
    var path            = require('path');

    var user_fields     = require(path.join(__dirname, './entity/user.js'));
    var user_meta       = require(path.join(__dirname, './table/user.js'));
    var User            = sequelize.define('user', user_fields(),user_meta());

    // Creating a custom method for our User model. 
    //This will check if an unhashed password entered by the 
    //user can be compared to the hashed password stored in our database
    User.prototype.validPassword = function(password) {
      return bcrypt.compareSync(password, this.password);
    };

    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password

    User.hook("beforeCreate", function(user) {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
    
    return User;

};