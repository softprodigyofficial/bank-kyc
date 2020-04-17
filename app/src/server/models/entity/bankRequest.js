const Sequelize = require('sequelize');
module.exports = function(){
  return{
    id: {
        type: Sequelize.INTEGER(20),
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unsigned: true
    },
    username: {
        type: Sequelize.STRING(255),
        unique: true,
        allowNull: false
    },
    user_data: {
        type: Sequelize.STRING(255),
        unique: true,
        allowNull: false
    },
    wallet_address: {
        type: Sequelize.STRING(255),
        unique: false,
        allowNull: false
    },
    request_index:{
        type: Sequelize.INTEGER(20),
        unique: true,
        allowNull: false,
        unsigned: true
    },
    is_allowed: {
        type: Sequelize.BOOLEAN,
        unique:false,
        allowNull: false,
        defaultValue: false
    },
    is_active: {
        type: Sequelize.BOOLEAN,
        unique:false,
        allowNull: true,
        defaultValue: false
    }
  }; 
};