const sendMessage = require('../../Twilio-Integration/sendMessage');
const replyService = require('./replyValidator')


function replyHandler(app) {

    try {
        app.post('/reply', async(req, res) => {
            const response = await replyService.handleReplyMessage(req.body);
            console.log(response);

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