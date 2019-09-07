const express = require('express');
const router = express.Router();
const middleware = require('../middleware/middleware');

router.get('/', middleware, (req, res) => {
  res.send('helo from route');
});

router.get('/second', (req, res) => {
  res.send('second route');
});

module.exports = router;
