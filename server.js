const express = require('express');
const http = require('http');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router')
const mongoose = require('mongoose')
const cors = require('cors')
const db = require('./models/index.js')

app.use(morgan('combined'));
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json({type: '*/*'}))

router(app);
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
