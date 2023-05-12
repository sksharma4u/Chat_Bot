const dotenv = require('dotenv');
const path = require('path')
const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

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