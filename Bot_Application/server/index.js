const express = require('express');
const path = require('path')
    //Require my Env file
const dotenv = require('dotenv');

const envPath = path.resolve(__dirname, '../.env');

dotenv.config({ path: envPath });

const bodyParser = require('body-parser');
const app = express();
const replyService = require('./replyContollers/replyService');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is working at ${PORT}`)
    replyService.replyHandler(app);
})