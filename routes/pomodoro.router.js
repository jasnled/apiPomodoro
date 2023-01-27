const express = require('express');

const router = express.Router();

router.get('/',(req,res) => {
  res.send('pomodoros');
});

router.post('/', (req,res) => {

  const body = req.body;
  res.status(200).json({
    message: 'created',
    data: body,
  });
});

module.exports = router;
