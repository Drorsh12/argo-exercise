const express = require('express');
const app = express();
const port = 3000;

const data = process.env.ENV || 'changed';

app.get('/', (req, res) => {
  res.send(`<h1>${data}</h1>`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
