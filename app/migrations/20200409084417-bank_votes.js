'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('bank_votes', 
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
