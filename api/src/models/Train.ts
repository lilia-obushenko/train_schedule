import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/db';

export const Train = sequelize.define(
  'Train',
  {
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },

    from: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    to: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    dispatch: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    dispatchTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    arrival: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    arrivalTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'trainsSchedule',
    updatedAt: false,
  },
);

Train.sync({ alter: true });