// Assignment Code
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const alphabet_capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const special_characters = "!@#$&_-+?.";

// More assignment code, this is helpful for the confirming section. One for input of length (ok), the rest for each array I've decided to use and concat later
var ok;
var includeAlphabet;
var includeAlphabetCapital;
var includeNumbers;
var includeSpecialChar;
var passwordOptions = '';
var generateBtn = document.querySelector("#generate");

console.log()

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");
  
  // This logic had to be moved, but this is where I had it originally

  // This will allow me to set the coditions for the password length and only accept whole integers. I found a helpful article here: https://www.geeksforgeeks.org/javascript-parseint-function/
  // ok = parseInt(prompt("Please enter how many characters you'd like your password to be. Enter a number between 8 - 128, thanks!"));

  // if (ok < 8 || ok > 128) {
  //   alert("Please enter a number between 8 - 128, thank you!") 
  //   writePassword()
  // } else {
  //   includeAlphabet = confirm("Would you like your password to have lowercase letters?");
  //   includeAlphabetCapital = confirm("Would you like your password to contain uppercase letters?");
  //   includeNumbers = confirm("Would you like to include numbers in your password?");
  //   includeSpecialChar = confirm("Would you like to include special characters in your password?");
  // }

  // // I will use this to collect and condense different choice outcomes to one variable for the randomizing function
  // var passwordOptions;
  
  // if (includeAlphabet == true) {
  //   passwordOptions = alphabet;
  // } else if (includeAlphabetCapital == true) {
  //   passwordOptions = alphabet_capital;
  // } else if (includeNumbers == true) {
  //   passwordOptions = numbers;
  // } else if (includeSpecialChar == true) {
  //   passwordOptions = special_characters;
  // } else if ((includeAlphabet == true) && (includeAlphabetCapital == true)) {
  //   passwordOptions = alphabet.concat(alphabet_capital);
  // } else if ((includeAlphabet == true) && (includeNumbers == true)) {
  //   passwordOptions = alphabet.concat(numbers);
  // } else if ((includeAlphabet == true) && (includeSpecialChar == true)) {
  //   passwordOptions = alphabet.concat(special_characters);
  // } else if ((includeAlphabetCapital == true) && (includeNumbers == true)) {
  //   passwordOptions = alphabet_capital.concat(numbers);
  // } else if ((includeAlphabetCapital == true) && (includeSpecialChar == true)) {
  //   passwordOptions = alphabet_capital.concat(special_characters);
  // } else if ((includeNumbers == true) && (includeSpecialChar == true)) {
  //   passwordOptions = numbers.concat(special_characters);
  // } else if ((includeAlphabet == true) && (includeAlphabetCapital == true) && (includeNumbers == true)) {
  //   passwordOptions = alphabet.concat(alphabet_capital, numbers);
  // } else if ((includeAlphabet == true) && (includeNumbers == true) && (includeSpecialChar == true)) {
  //   passwordOptions = alphabet.concat(numbers, special_characters);
  // } else if ((includeAlphabetCapital == true) && (includeNumbers == true) && (includeSpecialChar == true)) {
  //   passwordOptions = alphabet_capital.concat(numbers, special_characters);
  // } else if ((includeAlphabet == true) && (includeAlphabetCapital == true) && (includeNumbers == true) && (includeSpecialChar == true)) {
  //   passwordOptions = alphabet.concat(alphabet_capital, numbers, special_characters);
  // }

  function generatePassword() {
    ok = parseInt(prompt("Please enter how many characters you'd like your password to be. Enter a number between 8 - 128, thanks!"));

  if (ok < 8 || ok > 128) {
    alert("Please enter a number between 8 - 128, thank you!") 
    writePassword()
  } else {
    includeAlphabet = confirm("Would you like your password to have lowercase letters?");
    includeAlphabetCapital = confirm("Would you like your password to contain uppercase letters?");
    includeNumbers = confirm("Would you like to include numbers in your password?");
    includeSpecialChar = confirm("Would you like to include special characters in your password?");
  }

  // I will use this to collect and condense different choice outcomes to one variable for the randomizing function
  
  
  if (includeAlphabet == true) {
    passwordOptions += alphabet;
  } if (includeAlphabetCapital == true) {
    passwordOptions += alphabet_capital;
  } if (includeNumbers == true) {
    passwordOptions += numbers;
  } if (includeSpecialChar == true) {
    passwordOptions += special_characters;
  
    // This ended up being uneccesary, leaving it in so you can see my though process lol
    // } if ((includeAlphabet == true) && (includeAlphabetCapital == true)) {
  //   passwordOptions += alphabet.concat(alphabet_capital);
  // } if ((includeAlphabet == true) && (includeNumbers == true)) {
  //   passwordOptions += alphabet.concat(numbers);
  // } if ((includeAlphabet == true) && (includeSpecialChar == true)) {
  //   passwordOptions += alphabet.concat(special_characters);
  // } if ((includeAlphabetCapital == true) && (includeNumbers == true)) {
  //   passwordOptions += alphabet_capital.concat(numbers);
  // } if ((includeAlphabetCapital == true) && (includeSpecialChar == true)) {
  //   passwordOptions += alphabet_capital.concat(special_characters);
  // } if ((includeNumbers == true) && (includeSpecialChar == true)) {
  //   passwordOptions += numbers.concat(special_characters);
  // } if ((includeAlphabet == true) && (includeAlphabetCapital == true) && (includeNumbers == true)) {
  //   passwordOptions += alphabet.concat(alphabet_capital, numbers);
  // } if ((includeAlphabet == true) && (includeNumbers == true) && (includeSpecialChar == true)) {
  //   passwordOptions += alphabet.concat(numbers, special_characters);
  // } if ((includeAlphabetCapital == true) && (includeNumbers == true) && (includeSpecialChar == true)) {
  //   passwordOptions += alphabet_capital.concat(numbers, special_characters);
  // } if ((includeAlphabet == true) && (includeAlphabetCapital == true) && (includeNumbers == true) && (includeSpecialChar == true)) {
  //   passwordOptions += alphabet.concat(alphabet_capital, numbers, special_characters);
  }
  console.log(passwordOptions)
    let password = "";
    for (let i = 0; i < ok; i++) {
      password += passwordOptions.charAt(
        Math.floor(Math.random() * passwordOptions.length)
      );
    } console.log(password)
    return password;
  }
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);