const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// uses body-parser middleware
app.use(bodyParser.json());

// retrieves body and sends it as a json object
app.post('/', (req, res) => {
  res.json(req.body);
});

// start the server
app.listen(3000, () => {
  console.log('Server running');
});