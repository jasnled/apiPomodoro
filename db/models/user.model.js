const { Model, DataTypes, Sequelize } = require('sequelize');

 const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull:false,
    Primarykey:true,
    type: DataTypes.INTEGER,
    autoIncrement:true,
  },
  email: {
    allowNull: false,
    unique: true,
    type:DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull:false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue:Sequelize.NOW,
  }

};


class User extends Model {
  static associate(models){
    this.hasMany(models.Pomodoro, {
      as: 'pomodoros',
      foreingKey: 'userId'
    });
    this.hasOne(models.Option, {
      as: 'option',
      foreingKey: 'userId'
    })
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps:false
    }
  }
};

module.exports = { USER_TABLE, UserSchema, User };
