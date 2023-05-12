const sendMessage = require('../../Twilio-Integration/sendMessage');
const replyService = require('./replyValidator')

function replyHandler(app) {
    console.log("Hey there");

    try {
        app.post('/reply', async(req, res) => {
            console.log("hello1")

            const response = await replyService.handleReplyMessage(req.body);

            console.log(response);
            console.log(response.text);
            console.log(response.userId);
            await sendMessage.messageSend(response.text, response.userId);

        })
    } catch (err) {
        console.error('Error handling reply message:', err);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }

}

module.exports = {
    replyHandler
}