const prompts = [
    'what is your Name?',
    'Mentioned your qualification :',
    'About your Skill set:',
    'Work Experince if No then please type No:',
    'Institute Name:'
]

const answers = {};

function clearResponse() {
    Object.keys(answers).forEach((key) => {
        delete answers[key];
    });
}
async function userResponse(user, response) {
    console.log("Hello3")
    const currentPrompt = prompts[Object.keys(answers).length];
    answers[currentPrompt] = response;

    if (Object.keys(answers).length < prompts.length) {
        const nextPrompt = prompts[Object.keys(answers).length];
        response.text = nextPrompt;
        response.userId
        return { text: nextPrompt, userId: user }


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

        const finalData = "Please verify your Details: \n\n" + infomation + "\n Reply in Confirmed or Revised";
        console.log('All answer recieved', finalData);
        return { text: finalData, userId: user }


    }

}

module.exports = {
    userResponse,
    clearResponse
}