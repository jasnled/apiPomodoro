const { User, UserSchema } = require('./user.model');
const { Option, OptionSchema, OPTION_TABLE } = require('./option.model');
const { Pomodoro, PomodoroSchema } = require('./pomodoro.model');

function setupModels(sequelize){

  User.init(UserSchema, User.config(sequelize));
  Pomodoro.init(PomodoroSchema, Pomodoro.config(sequelize));
  Option.init(OptionSchema, Option.config(sequelize));


  Pomodoro.associate(sequelize.models);
  Option.associate(sequelize.models);
  User.associate(sequelize.models);


};
module.exports = setupModels;
