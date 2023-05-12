const emoji = '\u{1F600}';
const smile = `\u{1F60A}`;
const heart = `\u{2764}\u{FE0F}`;
const fire = `\u{1F525}`;
const heartInEye = `\u{1F60D}`;
const thumbsUp = `\u{1F44D}`;
const clap = `\u{1F44F}`;
const oneNumber = `\u{0031}\u{FE0F}\u{20E3}`
const twoNumber = `\u{0032}\u{FE0F}\u{20E3}`
const threeNumber = `\u{0033}\u{FE0F}\u{20E3}`


const message = `
Welcome to our Resume Chat Bot!${clap}

I'm here to assist you in creating and retrieving resumes quickly and efficiently.${String.fromCodePoint(0x1F4D1)}
        
With just a few simple commands, you'll be able to craft a professional resume or retrieve an existing one.
        
To get started, here are the available commands:  ${String.fromCodePoint(0x1F4DD)}

${oneNumber} Create:This command allows you to create a new resume.

${twoNumber} Get: This command enables you to retrieve a previously created resume.

${threeNumber} Reset : This command allow you to reset/start the whole bot`


const ThankYouMessage = `Thank you for providing the necessary information! ${smile}${smile}
We have received your responses ${String.fromCodePoint(0x2714)} and will now proceed to prepare your resume ${String.fromCodePoint(0x1F4BB)}. 
Please wait for a moment ${String.fromCodePoint(0x23F3)} while we generate your personalized resume ${String.fromCodePoint(0x1F4D1)}.`;



module.exports = {
    message,
    ThankYouMessage
}