const express = require('express');
const UserService = require('../services/user.service');

const router = express.Router();

const service = new UserService();

router.get('/', (req,res) => {
  const users = service.find()
  res.status(200).json(users);
});

router.post('/',
  async (req,res) => {
    const body = req.body;
    const newUsers = await service.create(body);
    res.status(200).json(newUsers);
});

module.exports = router
