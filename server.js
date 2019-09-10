const express = require('express');
const app = express();
const port = 8000;
const mainRoutes = require('./routes/mainRoutes');
const session = require('express-session');
const passport = require('passport');
const passportGoogle = require('./config/passportGoogle');

app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'default_session_secret',
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

passportGoogle(passport);

app.use(mainRoutes);

app.use('/', (req, res) => {
  res.send('Upss, page not found');
});

app.listen(port, () => console.log(`The server is running on port ${port}`));
