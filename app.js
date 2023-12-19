const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes');
const errorHandler = require('./middleware/error_handler');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(router);
app.use(errorHandler);
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.listen(port, () => {
  console.log(`server berjalan di port ${port}`)
});