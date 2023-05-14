var valid = false;
const message = require('../message');
const information = require('./QuestionBot')
const finalVerification = require('./dataVerification');

const handleReplyMessage = async(body) => {
    var recievedMessage = body.Body;
    recievedMessage = recievedMessage.toLowerCase();
    const senderId = body.From;

    const text = "";
    const userId = "";

    const response = {
        text,
        userId,
    };


    console.log(recievedMessage);

    if (recievedMessage == "reset" || (recievedMessage == "revised" && valid == true)) {
        information.clearResponse();
        valid = false;
        response.text = message.message;
        response.userId = senderId

        return response;

    } else if (recievedMessage == "confirmed" && valid == true) {

        response.text = message.ThankYouMessage;
        response.userId = senderId;
        valid = false;
        information.clearResponse();

        return response;

    } else if (recievedMessage == "create" || valid == true) {
        valid = true;
        const serviceReply = await information.userResponse(senderId, recievedMessage);

        response.text = serviceReply.text;
        response.userId = serviceReply.userId;

        return response;
    } else if (recievedMessage == "hii" || recievedMessage == "hello" || recievedMessage == "hey" || recievedMessage == "hi") {

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