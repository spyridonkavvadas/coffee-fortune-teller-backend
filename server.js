require('dotenv').config();
require('colors');

const express = require("express");
const cors = require('cors');
const connectDB = require('./dbinit');
const oracles = require('./api/oracles');
const errorHandler = require('./middleware/error');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();



app.use(express.json());
app.use(cors());
app.use('/oracles', oracles);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Started server on port ${PORT}`.rainbow.bold.inverse));

