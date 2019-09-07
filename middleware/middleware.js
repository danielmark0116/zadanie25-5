module.exports = (req, res, next) => {
  console.log('i am the middleware');
  next();
};
