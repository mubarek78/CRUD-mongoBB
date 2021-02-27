const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ejs = require("ejs");
const home = require('./server/routes/rout');



var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))

app.set('view engine', 'ejs')

app.use('/', home);





app.listen('3000', function () {
    console.log('port 3000 working')
})
