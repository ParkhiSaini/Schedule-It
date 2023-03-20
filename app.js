const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const connectDB = require('./config/db');
const routes = require('./routes/api/rooms');

const authRoutes = require('./routes/auth');
const { db } = require('./models/User');

const app = express();
connectDB();


app.use(bodyParser.json());
app.use(cors());

app.use('/api', authRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));