require('dotenv').config();
const mongoose = require('./src/config/database/mongodb');
const redis = require('./src/config/database/redis');
const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./src/routes/user.routes');
mongoose.start();
redis.start();
const app = express();

const PORT = process.env.PORT || 5000
// config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.get('/', (res, req) => res.send('Hello World'));
app.use('/user', userRouter);

// start
app.listen(PORT, () => console.log(`Server is running on port ${3000}`));