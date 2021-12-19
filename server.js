const express = require('express');
const path = require('path');
const connectDb = require('./config/db');
const config = require('config');
const { get } = require('config');
const app = express();

//connectDB
connectDb();

app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
