'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', 
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
        email: {
          type: Sequelize.STRING(255),
          unique: true,
          allowNull: false,
        }
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
          references: {
            model: 'banks',
            key: 'id'
          },
          onUpdate: 'RESTRICT',
          onDelete: 'RESTRICT',
          unique: false,
          allowNull: true,
          defaultValue:null
        }
        role_id: {
          type: Sequelize.INTEGER(20),
          references: {
            model: 'roles',
            key: 'id'
          },
          onUpdate: 'RESTRICT',
          onDelete: 'RESTRICT',
          unique: false,
          allowNull: true,
          defaultValue:null
        },
        wallet_address: {
          type: Sequelize.STRING(255),
          unique: true,
          allowNull: false
        },
        is_active:{
          type: Sequelize.BOOLEAN,
          unique:false,
          allowNull: true,
          defaultValue: true
        }
      },
      {
        engine: 'InnoDB',    // default: 'InnoDB'
        schema: '',    // default: public, PostgreSQL only.
        comment: 'users table', // comment for table
        collate: 'utf8_general_ci' // collation, MYSQL only
      }
    );
    
  },

  down: (queryInterface, Sequelize) => {}
};
