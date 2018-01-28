const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routes');

const app = express();
const PORT = process.env.PORT || '8080';
const IP = process.env.IP || 'localhost';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/', router);

app.listen(PORT, () => {
  console.log('app is listening on ', PORT);
})