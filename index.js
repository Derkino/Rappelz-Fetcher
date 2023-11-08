const express = require('express');
const app = express();
const cors = require('cors');
const query_select = require('./routes/query_select');
const postRoute = require('./routes/post_route');

app.use(cors());
app.use(express.json());

app.use('/api/get', query_select);
app.use('/api/post', postRoute);

app.get('/', (req, res) => {
  res.send('Hello, Thanks for using my API, this is the version 1.0 of the code, so if you find issues, please report them. You have an example page in the package.');
});

const port = 3000;
app.listen(port, () => {
  console.log(`\n\n-> Rappelz Express API version 1.0.2 running on ${port} <-\n\n-- Experimental Build: May contain bugs or crashes, please report them --\n\n-- If you have any suggestions, feel free to share them! --`);
});
