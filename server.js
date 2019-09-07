const express = require('express');
const app = express();
const port = 8000;
const mainRoutes = require('./routes/mainRoutes');

app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');
app.set('views', './views');

app.use(mainRoutes);

app.use('/', (req, res) => {
  res.send('Upss, page not found');
});

app.listen(port, () => console.log(`The server is running on port ${port}`));
