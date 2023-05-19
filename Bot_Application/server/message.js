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
Hello! Welcome to our medical clinic 👋 To schedule a doctor appointment, we need to verify your location. 🌍 Please share your live location with us${String.fromCodePoint(0x1F4CD)} so we can assist you better.

Thank you! 🙏😊`


const ThankYouMessage = `Thank you for providing the necessary information! 🙏 Please wait for a moment while we generate your receipt.⏳`;
const Doctors = `These are some doctors present nearby your location. Please type the full name of your doctor according to your need:
1. Dr. Rajan Singh
2. Dr. Manju Rawat
3. Dr. Hari Prasad

Enter your Doctor Name:`


module.exports = {
    message,
    ThankYouMessage,
    Doctors
}