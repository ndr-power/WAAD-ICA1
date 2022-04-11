const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// set ejs as a view engine

app.set('view engine', 'ejs');

// retrieves query and sends it as an object
app.get('/', (req, res) => {
    // renders views/index.ejs and passing text
  res.render('index', {
      text: "Hello world! I use EJS!"
  });
});

// start the server
app.listen(3000, () => {
  console.log('Server running');
});