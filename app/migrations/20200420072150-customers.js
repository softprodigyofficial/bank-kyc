'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('customers', 
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
        password: {
          type: Sequelize.STRING(255),
          unique: false,
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
      },
      {
      engine: 'InnoDB',    // default: 'InnoDB'
      schema: '',    // default: public, PostgreSQL only.
      comment: 'customers table', // comment for table
      collate: 'utf8_general_ci' // collation, MYSQL only
    });
  },

  down: (queryInterface, Sequelize) => {}
};
