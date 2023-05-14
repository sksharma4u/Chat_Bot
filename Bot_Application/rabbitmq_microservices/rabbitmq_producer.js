const amqp = require('amqplib/callback_api');

const verificationGranted = (response) => {
    amqp.connect('amqp://localhost', async(connErr, connection) => {
        if (connErr) {
            console.log(connErr);
        }
        connection.createChannel((channelError, channel) => {
            if (channelError) {
                console.log(channelError);
            }


            // Create Queue
            const Queue = 'CandidateData'
            channel.assertQueue(Queue);

            //send message
            console.log('---------------------')
            console.log(response);
            console.log('---------------------')
            const msg = response;

            console.log(msg);

            if (msg == null) {
                console.log('No message');
            } else {
                channel.sendToQueue(Queue, Buffer.from(msg));
            }

            console.log(`Message sended at producer side into ${Queue}`);
        })

    })
}

module.exports = {
    verificationGranted
}