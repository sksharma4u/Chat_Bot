const producer = require('../../rabbitmq_microservices/rabbitmq_producer')
const prompts = [
    'Doctor Name:',
    'Patient Name:',
    'Gender: Male/Female/Other:',
    'How old are you:',
    'Enter Your Mobile Number:',
]

const answers = {};
const Doctor = "";
const Patient_Name = "";
const Gender = "";
const Age = "";
const Mobile_Number = "";

let verifyInformation = {
    Doctor,
    Patient_Name,
    Gender,
    Age,
    Mobile_Number,
};

function clearResponse() {
    Object.keys(answers).forEach((key) => {
        delete answers[key];
    });
}

async function userResponse(user, response) {

    const currentPrompt = prompts[Object.keys(answers).length];
    answers[currentPrompt] = response;

    if (Object.keys(answers).length < prompts.length) {
        const nextPrompt = prompts[Object.keys(answers).length];
        return { text: nextPrompt, userId: user }

    } else {
        verifyInformation.Doctor = answers['Doctor Name:']
        verifyInformation.Patient_Name = answers['Patient Name:']
        verifyInformation.Gender = answers['Gender: Male/Female/Other:']
        verifyInformation.Age = answers['How old are you:']
        verifyInformation.Mobile_Number = answers['Enter Your Mobile Number:']

        const infomation = `Doctor Name : ${answers['Doctor Name:']}\nPatient Name : ${answers['Patient Name:']}\nGender : ${answers['Gender: Male/Female/Other:']}\nAge : ${answers['How old are you:']}\nMobile Number : ${answers['Enter Your Mobile Number:']}`

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