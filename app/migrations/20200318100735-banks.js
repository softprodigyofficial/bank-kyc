'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('banks', 
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
     },
     {
      engine: 'InnoDB',    // default: 'InnoDB'
      schema: '',    // default: public, PostgreSQL only.
      comment: 'banks table', // comment for table
      collate: 'utf8_general_ci' // collation, MYSQL only
     }
    );
  },

  down: (queryInterface, Sequelize) => {}
};
