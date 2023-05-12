const accountSid = 'ACdb985113b69606d0c71feadf58adeb3c';
const authToken = 'a46b96922a65d4a3d7a9bee7b6137eaf';

const client = require('twilio')(accountSid, authToken);
const messageSend = async(message, senderId) => {
    try {
        await client.messages
            .create({
                to: senderId,
                body: message,
                from: `whatsapp:+14155238886`

            })
            .then(message => console.log(message.sid))
    } catch (err) {
        console.log(err);

    }
}

module.exports = {
    messageSend
}