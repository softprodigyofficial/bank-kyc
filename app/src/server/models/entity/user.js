const Sequelize = require('sequelize');
module.exports = function(){
	return {
      id: {
          type: Sequelize.INTEGER(20),
          unique: true,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          unsigned: true
        },
        email: {
          type: Sequelize.STRING(255),
          unique: true,
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING(255),
          allowNull: false
        },
        firstName: {
          type: Sequelize.STRING(255),
          unique: false,
          allowNull: true
        },
        lastName: {
          type: Sequelize.STRING(255),
          unique: false,
          allowNull: true
        },
        bank_id: {
          type: Sequelize.INTEGER(20),
          unique: false,
          allowNull: true,
          defaultValue:null
        },
        role_id: {
          type: Sequelize.INTEGER(20),
          unique: false,
          allowNull: true,
          defaultValue:null
        },
        is_active:{
          type: Sequelize.BOOLEAN,
          unique:false,
          allowNull: true,
          defaultValue: true
        }
	};
};