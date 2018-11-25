let router = require('express').Router();
// let textCtrl = require('./../javascript/text.js');
let twilio = require('twilio');
require('dotenv').config();
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
let client = new twilio(accountSid, authToken);

/* GET home page. */
router.get('/', function(req, res) {
    client.messages.create({
        body: 'Your Tushy is thinking about you!',
        to: process.env.TO_SMS,  // Text this number
        from: process.env.FROM_SMS // From a valid Twilio number
      })
      .then(res.render('index', console.log()));

      // (message) => console.log(message.sid)
  // here is where I can pass info to the index page so I can send the text
  // when Matt clicks the 'Send' button and then update that button info 
  // upon sending/receiving text

  // need tp print req to see if value == text message sent or something
    // res.render('index', console.log(req));
});

module.exports = router;