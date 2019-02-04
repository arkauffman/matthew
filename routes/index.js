let router = require('express').Router();
let twilio = require('twilio');
let express = require('express');
let bodyParser = require('body-parser');
require('dotenv').config();
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
let client = new twilio(accountSid, authToken);


router.get('/', function(req, res) {
    res.render('index');
});

router.get('/text', function(req, res) {
    var message = '';
    client.messages.create({
        body: 'Your Tushy is thinking about you!',
        from: process.env.FROM_SMS,
        to: process.env.TO_SMS,
    })
    .then((message) => {
        console.log('Message: ' + message.sid);
    });

    // client.messages.each(messages => console.log(messages.status))
    res.render('index', {message});
});

module.exports = router;