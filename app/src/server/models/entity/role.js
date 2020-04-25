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
    name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
    },
    is_active: {
        type: Sequelize.BOOLEAN,
        unique:false,
        allowNull: true,
        defaultValue: true
    }
  }
};