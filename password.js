let password = 'disIs1pswd!';
// check length >= 10 and < 20
let pwLengthCheck = 1;
// check if pw is forbidden
let pwBogusCheck = 0;
// check if there is number
let pwNumCheck = 0;
// check if there is letter
let pwLetterCheck = 0;
// check if there is upper-case letter
let pwUpperCaseCheck = 0;
// check if there is special character
let pwSpecialCheck = 0;
// check for white spaces
let pwSpaceCheck = 0;
// I found regular expressions to be easiest way to do these checks. I know we haven't learned them yet. Hope it's ok.
const regexNum = new RegExp('[0-9]');
const regexLetter = new RegExp('[a-zA-Z]');
const regexUpper = new RegExp('[A-Z]');
const regexSpecial = new RegExp('[!"#$%&\'()*+,-./:;<=>?@\\[\\]^_`{|}~]');
const regexSpace = new RegExp('\\s');

if (password.length < 10) {
  pwLengthCheck = 0;
  console.log('Password must be at least 10 characters long');
}

if (password.length > 20) {
  pwLengthCheck = 0;
  console.log('Password is too long, over 20 characters');
}

if (password === 'password' || password === 'letmein') {
  pwBogusCheck = 1;
  console.log('Password not secure enough, choose another');
}

for (let i = 0; i < password.length; i++) {
  if (regexLetter.test(password[i]) === true) {
    pwLetterCheck = 1;
  }
  if (regexNum.test(password[i]) === true) {
    pwNumCheck = 1;
  }
  if (regexUpper.test(password[i]) === true) {
    pwUpperCaseCheck = 1;
  }
  if (regexSpecial.test(password[i]) === true) {
    pwSpecialCheck = 1;
  }
  if (regexSpace.test(password[i]) === true) {
    pwSpaceCheck = 1;
  }
}
if (
  pwLengthCheck === 1 &&
  pwBogusCheck === 0 &&
  pwLetterCheck === 1 &&
  pwNumCheck === 1 &&
  pwUpperCaseCheck === 1 &&
  pwSpecialCheck === 1 &&
  pwSpaceCheck === 0
) {
  console.log('Password successfully set');
} else {
  console.log('Password missing requirements');
}
