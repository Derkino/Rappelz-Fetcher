const express = require('express');
const app = express();
const cors = require('cors');

const query_select = require('./routes/query_select');

app.use(cors());

app.use('/api/get', query_select);

app.get('/', (req, res) => {
  res.send('Hello, Thanks for using my API, this is the version 1.0 of the code, so if you find issue please report it. you have an example page in the package');
});


const port = 3000;
app.listen(port, () => {
  console.log(`Rappelz Express API version 1.0.0 running on ${port}`);
});
