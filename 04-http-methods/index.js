const express = require('express');
const app = express();

// GET
app.get('/', (req, res) => res.send('GET'));
// POST
app.post('/', (req, res) => res.send('POST'));
// PUT
app.put('/', (req, res) => res.send('PUT'));
// DELETE
app.delete('/', (req, res) => res.send('DELETE'))


// start the server
app.listen(3000, () => {
  console.log('Server running');
});