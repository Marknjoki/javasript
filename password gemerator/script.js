//password legth will be 15 characters
//upper case,lowercase,numbers,specalcharacters
//

function passwordGenerate(length, upperCase, lowerCase, number, symbol) {


    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const loweCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "01234567890";
    const specialChars = "!@()+&%$#~>*";

    let allowedChars = "";
    let password = "";

    //concatenating allowed characters with ternary operator 
    //if upper case characters are allowed(true) concatentate to allowed characters else if false concatenate no character

    allowedChars += upperCase ? upperCaseChars : ""
    allowedChars += lowerCase ? loweCaseChars : ""
    allowedChars += number ? numbers : ""
    allowedChars += symbol ? specialChars : ""

    console.log(allowedChars)

    if (length <= 0) {
        return `(YOUR PASSWORD CANNOT BE EMPTY!!)`
    }
    if (allowedChars.length === 0) {
        return `(PLEASE ENTER A VALID CHARACTER)`
    }
    //for every iterartion generate a randomn index of the allowedcharacters and then concattenate the character to our password

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];


    }
    return password;
}
const passwordLength = 10;
const upperCase = true;
const lowerCase = true;
const number = true;
const symbol = true;

const password = passwordGenerate(passwordLength, upperCase, lowerCase, symbol, number);

console.log(`Generated password: ${password}`)