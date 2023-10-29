const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Rappelz API Initial Commit');
});


const port = 3000;
app.listen(port, () => {
  console.log(`Rappelz Express API version 1.0.0 running on ${port}`);
});
