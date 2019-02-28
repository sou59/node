var express = require('express');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/packtdb', function(err, res) {
    if(err) {
        console.log('Error connecting to localhost/packtdb');
        return;
    } else {
        console.log('Connected to localhost/packtdb');
    }
});

var contactPersonSchema = mongoose.Schema({
    contactId: Number,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    imagePath: String
});

var contactPerson = mongoose.model('contactPerson', contactPersonSchema, 'contactPerson');

