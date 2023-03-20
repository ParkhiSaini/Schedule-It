const express = require('express');
const mongoose = require('mongoose');

const connectDB = require('./config/db');
const routes = require('./routes/api/rooms');


const app = express();
connectDB();

app.use('/api', routes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));