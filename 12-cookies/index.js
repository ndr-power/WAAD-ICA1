const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const app = express();

app.use(cookieParser('SomeSecret'));

app.use(bodyParser.urlencoded({ extended: false }));
// sets cookie 'id' with a given value
app.post('/setCookie', (req, res) => {
    res.cookie('id', req.body.id);
    res.sendStatus(200);
});
app.get('/getCookie', (req, res) => {
    res.send(req.cookies.id);
})
// start the server
app.listen(3000, () => {
  console.log('Server running');
});