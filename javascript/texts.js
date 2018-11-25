let twilio = require('twilio');
require('dotenv').config();

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

let client = new twilio(accountSid, authToken);
client.messages.create({
  body: 'Your Tushy is thinking about you!',
  to: process.env.TO_SMS,  // Text this number
  from: process.env.FROM_SMS // From a valid Twilio number
})
.then((message) => console.log(message.sid));


console.log("HELLO FROM YOUR JS FILE!")
document.getElementById('button').addEventListener('click', function(){
    console.log('HELLO!');
    document.getElementById('button-text').innerHTML = 'SENDING...'
    // this is where i would put the client.message.create function
    // then I would update the inner html of the button
});

function index(req, res) {
  res.render('', req)
}

module.exports = {
  index
}