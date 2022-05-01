const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(bodyParser.json())


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});



