const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(bodyParser.json())


app.listen(80, () => {
  console.log('Server is running on port 80');
});



