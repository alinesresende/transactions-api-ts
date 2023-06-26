// src/database/migrations/01-create-users.ts

import { DataTypes, Model, QueryInterface } from 'sequelize';

import { User } from '../../types/User';

// 1 - queryInterface.createTable() recebe um tipo que havíamos importado do TypeScript, o <Model>.
// 2 - já a <Model> recebe o tipo que queremos associar com essa tabela, que, no caso, é o <User>
// 3 - queryInterface.createTable<Model<User>>

export default { 
  up(queryInterface: QueryInterface) { 
    return queryInterface.createTable<Model<User>>('users', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      }
    }) 
  }, 
  
  down(queryInterface: QueryInterface) { 
    return queryInterface.dropTable('users') 
  } 
};