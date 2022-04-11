const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
// connects to mysql
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password1"
});
  
con.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL!");
});

app.use(bodyParser.urlencoded({ extended: false }));
// shows whether server is connected to mysql
app.get('/isConnected', (req, res) => {
    con.query(`SELECT 1`, (err, results, fields) => {
        if (err) throw err;
        res.send('Connected!');
    });
});
// queries users from mysql
app.get('/getUsers', (req, res) => {
    con.query(`SELECT * FROM users`, (err, results, fields) => {
        res.json({ results });
    });
});
// start the server
app.listen(3000, () => {
  console.log('Server running');
});