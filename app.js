const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();

// DB
mongoose.connect(process.env.MONGO_URI);

// REQUIRE ROUTES
const postRoutes = require('./routes/post');

// MIDDLEWARE
app.use(morgan('dev'));

// ROUTES
app.use('/', postRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
