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
    rating:{
      type: Sequelize.INTEGER(20),
      unique: false,
      allowNull: true
    },
    votes:{
      type: Sequelize.INTEGER(20),
      unique: false,
      allowNull: true
    },
    is_active: {
      type: Sequelize.BOOLEAN,
      unique:false,
      allowNull: false,
      defaultValue: true
    }
	};
};