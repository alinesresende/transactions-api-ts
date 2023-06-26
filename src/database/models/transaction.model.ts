// src/database/models/transaction.model.ts

import { DataTypes, ModelDefined, Optional } from 'sequelize';
import { Transaction } from '../../types/Transaction';
import db from './index';

const TransactionModel: ModelDefined<Transaction,
Optional<Transaction, 'id'>> = db.define('Transaction', { 
  name: DataTypes.STRING(30),
  price: DataTypes.DECIMAL(10, 2),
  type: DataTypes.STRING,
  userId: DataTypes.INTEGER,
}, {
  tableName: 'transactions',
  timestamps: false,
  underscored: true,
});

export default TransactionModel;