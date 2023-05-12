var count = 0;
const message = require('../message');
const information = require('./QuestionBot')
const handleReplyMessage = async(body) => {
    var recievedMessage = body.Body;
    recievedMessage = recievedMessage.toLowerCase();
    const senderId = body.From;
    const text = "";
    const userId = "";
    const response = {
        text,
        userId
    };


    console.log(recievedMessage);

    if (recievedMessage == "reset" || (recievedMessage == "revised" && count == 1)) {
        information.clearResponse();
        count = 0;
        response.text = message.message;
        response.userId = senderId

        return response;

    } else if (recievedMessage == "create") {
        count++;
        response.text = "What is your Name:";
        response.userId = senderId

        return response;
    } else if (recievedMessage == "confirmed" && count == 1) {

        response.text = message.ThankYouMessage;
        response.userId = senderId;
        count = 0;
        return response;

    } else if (count == 1) {

        const serviceReply = await information.userResponse(senderId, recievedMessage);

        response.text = serviceReply.text;
        response.userId = serviceReply.userId;
        return response;

    } else if (recievedMessage == "hii" || recievedMessage == "hello" || recievedMessage == "hey") {

        response.text = message.message;
        response.userId = senderId

        return response;
    } else {
        response.text = "Invalid Response , only create , get and reset command is valid.";
        response.userId = senderId

        return response;

    }

}


module.exports = {
    handleReplyMessage
}