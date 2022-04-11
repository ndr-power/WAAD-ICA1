const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// uses body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// retrieves query and sends it as an object
app.get('/', (req, res) => {
  res.json(req.query);
});

// start the server
app.listen(3000, () => {
  console.log('Server running');
});