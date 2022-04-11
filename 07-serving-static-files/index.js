const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// static server
app.use(express.static('.'));
// start the server
app.listen(3000, () => {
  console.log('Server running');
});