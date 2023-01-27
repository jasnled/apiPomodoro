const { Model, DataTypes, Sequelize } = require('sequelize');

const { USER_TABLE } = require('./user.model');

const POMODORO_TABLE = 'pomodoros';

const PomodoroSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type:DataTypes.INTEGER
  },
  time: {
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 25,
  },
  timeSpent: {
    allowNull: false,
    field: 'time_spent',
    type: DataTypes.INTEGER,
    defaultValue: 0
  },

  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    Refences : {
      model: USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  createdAt:{
    field: 'created_at',
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },

}

class Pomodoro extends Model {
  static associate(models){
    this.belongsTo(models.User, {
      as: 'user',
    });
  }
  static config(sequelize){
    return {
      sequelize,
      tableName: POMODORO_TABLE,
      modelName: 'Pomodoro',
      timestamps: false
    }
  }
}


module.exports = { Pomodoro, PomodoroSchema, POMODORO_TABLE };
