const express = require('express');
const router = express.Router();
const isAuth = require('../middleware/auth');
const passport = require('passport');

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

router.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/'
  }),
  (req, res) => {
    res.redirect('/');
  }
);

router.get('/', (req, res) => {
  res.render('index', {
    user: req.user
  });
});

router.get('/secret', isAuth, (req, res) => {
  res.render('secret', { user: req.user });
});

router.get('/notAuthorized', (req, res) => {
  res.render('notAuthorized');
});

router.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});

module.exports = router;
