//Dependencies: 
//yarn add express cors twilio 

const express = require('express');
const cors = require('cors');
const twilio = require('twilio');

//twilio requirements -- Texting API 
const accountSid = 'AC29c659db7f9de730db0d591b11023265';
const authToken = '8f9bb2d1256adc541cd0e755bae752d3';
const client = new twilio(accountSid, authToken);

const app = express(); //alias

app.use(cors()); //Blocks browser from restricting any data

//Welcome Page for the Server 
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server')
})


//Twilio 
app.get('/send-text', (req, res) => {
    //Welcome Message
    res.send('Hello to the Twilio Server')

    //_GET Variables
    const { recipient, textmessage } = req.query;


    //Send Text
    client.messages.create({
        body: textmessage,
        to: recipient,  // Text this number
        from: '+16165042596' // From a valid Twilio number
    }).then((message) => console.log(message.body));
})

app.listen(3000, () => console.log("Running on Port 3000"))
