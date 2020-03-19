'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('banks', [{
      name: 'rbi',
      is_active: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'pnb',
      is_active: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {}
};
