const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const HTTP_PORT = 4000;
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.listen(HTTP_PORT, () => {
    console.log(`The server is running on port: ${HTTP_PORT}`);
});

const esp=require('./routes/esp');
app.use('/esp',esp);

