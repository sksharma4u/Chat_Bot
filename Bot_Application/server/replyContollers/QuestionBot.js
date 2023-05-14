const producer = require('../../rabbitmq_microservices/rabbitmq_producer')
const prompts = [

    'what is your Name?',
    'Mentioned your qualification :',
    'About your Skill set:',
    'Work Experince if No then please type No:',
    'Institute Name:'
]

const answers = {};

const Name = "";
const Qualification = "";
const Skills = "";
const Experience = "";
const Institute = "";

let verifyInformation = {

    Name,
    Qualification,
    Skills,
    Experience,
    Institute
};

function clearResponse() {
    Object.keys(answers).forEach((key) => {
        delete answers[key];
    });
}

async function userResponse(user, response) {
    if (response == "create") {
        return {
            text: "What is your name :",
            userId: user
        }
    }
    const currentPrompt = prompts[Object.keys(answers).length];
    answers[currentPrompt] = response;

    if (Object.keys(answers).length < prompts.length) {
        const nextPrompt = prompts[Object.keys(answers).length];
        return { text: nextPrompt, userId: user }


    } else {

        verifyInformation.Name = answers['what is your Name?']
        verifyInformation.Qualification = answers['Mentioned your qualification :']
        verifyInformation.Skills = answers['About your Skill set:']
        verifyInformation.Experience = answers['Work Experince if No then please type No:']
        verifyInformation.Institute = answers['Institute Name:']

        const infomation = `Name : ${answers['what is your Name?']}\nQualification : ${answers['Mentioned your qualification :']}\nYour Skills : ${answers['About your Skill set:']}\nWork Experience : ${answers['Work Experince if No then please type No:']}\nInstiture Name:${answers['Institute Name:']}\n`

        const finalData = "Here is your Given  Details : \n\n" + infomation + "\nFor Moving Forward Please Type CONFIRMED : ";

        console.log('-- -- -- -- -- -- -- - ')
        console.log(verifyInformation);
        producer.verificationGranted(JSON.stringify(verifyInformation));

        console.log('-----------------------');
        return { text: finalData, userId: user }

    }
}




module.exports = {
    userResponse,
    clearResponse,
    verifyInformation
}