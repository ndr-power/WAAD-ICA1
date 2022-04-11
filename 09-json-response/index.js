const express = require('express');
const bodyParser = require('body-parser');

const app = express();


// sends json
app.get('/', (req, res) => {
  res.json({a: 1, b: 2, c: 3});
});

// start the server
app.listen(3000, () => {
  console.log('Server running');
});