const express = require('express');
const path = require('path');
const cards = require('./routes/cards');
const users = require('./routes/users');

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', cards);
app.use('/', users);

app.get('*', (req, res) => {
  res.status(405).send({
    message: 'Запрашиваемый ресурс не найден',
  });
});

app.listen(PORT);