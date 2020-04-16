'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('bank_requests', 
    {
      id: {
        type: Sequelize.INTEGER(20),
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unsigned: true
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
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
        allowNull: true,
        defaultValue: false
      }
    },
    {
      engine: 'InnoDB',    // default: 'InnoDB'
      schema: '',    // default: public, PostgreSQL only.
      comment: 'bank_requests table', // comment for table
      collate: 'utf8_general_ci' // collation, MYSQL only
    });
    
  },

  down: (queryInterface, Sequelize) => {}
};
