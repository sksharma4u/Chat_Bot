const sendMessage = require('../whatsApp/sendMessage');
const prompts = [
    'what is your Name?',
    'Mentioned your qualification :',
    'About your Skill set:',
    'Work Experince if No then please type No:',
    'Institute Name:'
]

const answers = {};

function clearResponse() {
    answers = {};
}
async function userResponse(user, response) {
    const currentPrompt = prompts[Object.keys(answers).length];
    answers[currentPrompt] = response;

    if (Object.keys(answers).length < prompts.length) {
        const nextPrompt = prompts[Object.keys(answers).length];
        await sendMessage.messageSend(nextPrompt, user)
            .catch((err) => {
                console.log("Error in sending message ...", err);
            })
    } else {
        const verifyInformation = {
            "Name": answers['what is your Name?'],
            "Qualification": answers['Mentioned your qualification :'],
            "Your Skills": answers['About your Skill set:'],
            "Work Experience:": answers['Work Experince if No then please type No:'],
            "Institure Name:": answers['Institute Name:']

        }

        const infomation = `Name : ${answers['what is your Name?']}\nQualification : ${answers['Mentioned your qualification :']}\nYour Skills : ${answers['About your Skill set:']}\nWork Experience : ${answers['Work Experince if No then please type No:']}\nInstiture Name:${answers['Institute Name:']}\n`

        console.log(infomation)
        await sendMessage.messageSend("please Verify your Details: \n" + infomation + "\n Reply in Yes or NO", user)
        console.log('All answer recieved', answers);

    }

}

module.exports = {
    userResponse,
    clearResponse
}