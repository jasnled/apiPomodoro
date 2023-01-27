const express = require('express');

const router = express.Router();
const usersRouter = require('./user.router');
const pomodorosRouter = require('./pomodoro.router');


function routerApi (app){

  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/pomodoros', pomodorosRouter);

}

module.exports = routerApi
