const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const session = require('express-session');
// initialize and use session 
app.use(session({
    secret: "SomeSecret",
    saveUninitialized: true,
    resave: false
}));
// set session variable to true
app.post('/', (req, res) => {
   if (!req.session.something) req.session.something = 123;
   res.sendStatus(200);
});
app.get('/', (req, res) => {
    res.send(req.session.something || 'null');
});
// start the server
app.listen(3000, () => {
  console.log('Server running');
});