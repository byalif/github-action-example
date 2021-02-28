const express = require('express')

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log(`Github Action Example app listening at http://localhost:${port}`)
});

module.exports = app;
