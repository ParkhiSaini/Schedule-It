const express = require('express');
const connectDB = require('./config/db');
const routes = require('./routes/api/rooms');

const app = express();
connectDB();

app.use('/api/rooms', routes);

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));