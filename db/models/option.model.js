const { Model, DataTypes, Sequelize } = require('sequelize');

const { USER_TABLE } = require('./user.model');

const OPTION_TABLE = 'options'

const OptionSchema = {
  id: {
    allowNull:false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  pomodoroTime: {
    field: 'pomodoro_time',
    allowNull:false,
    type: DataTypes.INTEGER,
    defaultValue: 25,
  },
  shortBreak: {
    field: 'short_break',
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 5,
  },
  longBreak: {
    field: 'long_break',
    allowNull: false,
    type: DataTypes.INTEGER,
    default: 10
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  userId:{
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique:true,
    refences:{
      model:USER_TABLE,
      key:'id',
    },

    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }

}





class Option extends Model {
  static associate(models){
    this.belongsTo(models.User,{ as: 'user' });
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: OPTION_TABLE,
      modelName: 'Option',
      timestamps: false
    }
  }
}

module.exports = { Option, OptionSchema, OPTION_TABLE };
