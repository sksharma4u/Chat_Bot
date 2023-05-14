const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (connErr, connection) => {
    if (connErr) {
        throw connErr
    }

    // create channel
    connection.createChannel((channErr, channel) => {
        if (channErr) {
            throw channErr;
        }

        //Consume message
        const Queue = 'CandidateData';
        //Message Consume
        channel.consume(Queue, (msg) => {
            if (msg) {
                console.log(`Message recieved: ${msg.content.toString()}`)
                channel.ack(msg);
            } else {
                console.log('No message')
            }

        })



    })


})