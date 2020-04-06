'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('banks', [{
      name: 'rbi',
      is_active: 1,
      rg_number: 'dadfa33221',
      eth_transaction_id: "5686868",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'pnb',
      is_active: 1,
      rg_number: 'dadfa33222',
      eth_transaction_id: "7686979",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {}
};
