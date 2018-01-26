const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || '8080';
const IP = process.env.IP || 'localhost';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../client')));

app.listen(PORT, () => {
  console.log('app is listening on ', PORT);
})