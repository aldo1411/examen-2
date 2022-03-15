const express = require('express');
const logger = require('./middleware/logger');
const connectDB = require('./services/mongoose');
const { connectWhatsapp } = require('./services/whatsapp-web');

const app = express();

//DB
connectDB()

//whatsapp
connectWhatsapp()

//MIddleware
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API route
app.use('/api/persons', require('./routes/api/persons'));

module.exports = app
