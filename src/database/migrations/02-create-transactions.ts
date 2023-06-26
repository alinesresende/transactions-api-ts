// src/database/migrations/02-create-transactions.ts

import { DataTypes, Model, QueryInterface } from 'sequelize';

import { Transaction } from '../../types/Transaction';

// 1 - queryInterface.createTable() recebe um tipo que havíamos importado do TypeScript, o <Model>.
// 2 - já a <Model> recebe o tipo que queremos associar com essa tabela, que, no caso, é o <Transaction>
// 3 - queryInterface.createTable<Model<Transaction>>

export default { 
  up(queryInterface: QueryInterface) { 
    return queryInterface.createTable<Model<Transaction>>('transactions', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(30),
      },
      price: {
        allowNull: false,
        type: DataTypes.DECIMAL(10, 2),
      },
      type: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      userId: {
        allowNull: false,
        field: 'user_id',
        type: DataTypes.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        },
      },
    }) 
  },

  down(queryInterface: QueryInterface) { 
    return queryInterface.dropTable('transactions') 
  } 
};