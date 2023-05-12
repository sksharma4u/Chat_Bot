const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sendMessage = require('../whatsApp/sendMessage');
const message = require('./message');
const information = require('./dataGathering')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log("Server is working")
    app.get("/", (req, res) => {
        res.send("hii its working");
    })
})



var count = 0;
app.post('/reply', async(req, res) => {
    var recievedMessage = req.body.Body;
    recievedMessage = recievedMessage.toLowerCase();
    const senderId = req.body.From;

    console.log(recievedMessage);

    if (recievedMessage == "reset" || recievedMessage == "no") {
        information.clearResponse();
        count = 0;
        await sendMessage.messageSend(message.message, senderId);
    } else if (recievedMessage == "create") {
        count++;
        await sendMessage.messageSend("What is you Name: ", senderId);
    } else if (recievedMessage == "yes") {
        await sendMessage.messageSend("Thank you for providing the necessary information! We have received your responses and will now proceed to prepare your resume. Please wait for a moment while we generate your personalized resume.", senderId)
    } else if (count == 1) {
        information.userResponse(senderId, recievedMessage);
    } else if (recievedMessage == "hii" || recievedMessage == "hello" || recievedMessage == "hey") {
        await sendMessage.messageSend(message.message, senderId);
    } else {
        await sendMessage.messageSend("Invalid Response  , only create and get Command works", senderId)
    }
})