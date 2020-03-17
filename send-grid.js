// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
require('dotenv').config()
sgMail.setApiKey(process.env.API_KEY);

const msg = {
  to: 'mike@mikenando.io',
  from: 'mike@mikenando.io',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);