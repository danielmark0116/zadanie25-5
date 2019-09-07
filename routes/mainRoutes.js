const express = require('express');
const router = express.Router();
const middleware = require('../middleware/middleware');

router.get('/', middleware, (req, res) => {
  res.render('index', {
    user: { auth: false, login: 'testUser', email: 'email@gmail.com' }
  });
});

router.get('/second', (req, res) => {
  res.send('second route');
});

module.exports = router;
