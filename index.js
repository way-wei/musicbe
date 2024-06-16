const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const musicRoutes = require('./src/routes/musicRoutes');
require('dotenv').config();

const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(musicRoutes);

app.listen(port,  () => {
  console.log(`App listening at http://localhost:${port}`);
});