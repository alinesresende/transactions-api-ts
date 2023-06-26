// src/database/models/user.model.ts
import { DataTypes, ModelDefined, Optional } from 'sequelize';
import { User } from '../../types/User';
import db from './index';

const UserModel: ModelDefined<User, Optional<User, 'id'>> = db.define('User', {
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  name: DataTypes.STRING,
}, {
  tableName: 'users',
  timestamps: false,
  underscored: true,
});

export default UserModel;