//backend framework
const express = require('express');
// orm to interact with mango database
const mongoose = require('mongoose');
// gets the name of the post from the request
const bodyparser = require('body-parser');

// iniatialise express
const app = express();

// body parser middleware
app.use(bodyparser.json());


// DB config from config keys file
const db = require('./config/keys').mangoURI;

// connect mongo using mongoose
mongoose.connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`Server started on port ${port}`));