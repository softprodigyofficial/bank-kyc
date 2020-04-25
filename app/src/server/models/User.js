module.exports = function(sequelize, DataTypes) {

    var bcrypt      = require("bcryptjs");
    var fs          = require('fs');
    var path        = require('path');

    var user_fields = require(path.join(__dirname, './entity/user.js'));
    var user_meta   = require(path.join(__dirname, './table/user.js'));
    var User        = sequelize.define('User', user_fields(),user_meta());

    // Creating a custom method for our User model.
    //This will check if an unhashed password entered by the
    //user can be compared to the hashed password stored in our database
    User.prototype.validPassword = function(password) {
        console.log("password", password);
      return bcrypt.compareSync(password, this.password);
    };

    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password

    User.beforeCreate(user => {
      user.password = bcrypt.hashSync(
       user.password,
        bcrypt.genSaltSync(10),
        null
      );
    });

    User.associate = function(models){
        User.belongsTo(models.Bank,{
          as: 'bank', constraints: true, targetKey: 'id', foreignKey:'bank_id'
        });
    }

    return User;

};
