const express = require('express');
const app = express();
// sends 200 as a status & body
app.get('/', (req,res) => res.sendStatus(200));
// sends 404 as status and a string as body
app.get('/404', (req, res) => res.status(404).send('404 Not Found'));
app.get('/418', (req, res) => res.status(418).send(`418 I'm a teapot`));
// start the server
app.listen(3000, () => {
    console.log('Server running');
});
