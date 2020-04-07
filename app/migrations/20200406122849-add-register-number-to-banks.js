'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    	  queryInterface.addColumn('banks', 'rg_number',{ 
           type: Sequelize.STRING(255),
           allowNull: false,
           unique: true 
        },{
           after: "wallet_address"
        }),
        queryInterface.addColumn('banks', 'eth_transaction_id',{ 
           type: Sequelize.STRING(255),
           allowNull: false,
           unique: true,
        },{
          after: 'rg_number'
        })
    ]),

  down: (queryInterface, Sequelize) => {}
};
