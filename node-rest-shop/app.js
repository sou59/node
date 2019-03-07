const express = require('express');
const app = express();
// log
const morgan = require('morgan');

// Middelware extract entire body portion of an incoming request stream and exposes it on req.body
const bodyParser = require('body-parser');
// requete sur la base MongoDB
const mongoose = require('mongoose');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
const userRoutes = require('./api/routes/user');

mongoose.connect('mongodb://localhost:27017/node-shop', { useNewUrlParser: true });

mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));

// // for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// for parsing application/json
app.use(bodyParser.json());

// Allow toutes les entrées, sinon n'autoriser que cette url à accéder à l'API "http://localhost:4200"
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

// Routes which should handle requests
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/user', userRoutes);

// pour les autres routes inexistantes
app.use( (req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use( (error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;