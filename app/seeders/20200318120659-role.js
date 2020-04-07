'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', [{
      name: 'admin',
      is_active: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'bank',
      is_active: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {}
};
