module.exports = (req, res, next) => {
  console.log('check if logged');
  if (true) {
    next();
  } else res.send('not logged in');
};
