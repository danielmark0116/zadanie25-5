const express = require('express');
const app = express();
const port = 8000;
const mainRoutes = require('./routes/mainRoutes');

app.use(mainRoutes);

app.use('/', (req, res) => {
  res.send('Upss, page not found');
});

app.listen(port, () => console.log(`The server is running on port ${port}`));
