const express = require('express');
const app = express();
const cors = require('cors');

const query_select = require('./query_select');

app.use(cors());

app.use('/api/get', query_select);

app.get('/', (req, res) => {
  res.send('Rappelz API Initial Commit');
});


const port = 3000;
app.listen(port, () => {
  console.log(`Rappelz Express API version 1.0.0 running on ${port}`);
});
