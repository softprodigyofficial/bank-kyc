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
    bank_id: {
      type: Sequelize.INTEGER(20),
      unique: false,
      allowNull: true,
      defaultValue:null
    },
    wallet_address: {
      type: Sequelize.STRING(255),
      unique: false,
      allowNull: false
    },
    vote:{
      type: Sequelize.INTEGER(20),
      allowNull: false,
      defaultValue: 0
    }
	};
};