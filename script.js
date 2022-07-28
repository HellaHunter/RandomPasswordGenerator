// Assignment Code
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const alphabet_capital = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numbers = ["1","2","3","4","5","6","7","8","9","0"];
const special_characters = ["!","@","#","$","&","_","-","+","?","."];

// More assignment code, this is helpful for the confirming section. One for input of length (ok), the rest for each array I've decided to use and concat later
var ok;
var includeAlphabet;
var includeAlphabetCapital;
var includeNumbers;
var includeSpecialChar;

var generateBtn = document.querySelector("#generate");

console.log()

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");
  
  // This will allow me to set the coditions for the password length and only accept whole integers. I found a helpful article here: https://www.geeksforgeeks.org/javascript-parseint-function/
  ok = parseInt(prompt("Please enter how many characters you'd like your password to be. Enter a number between 8 - 128, thanks!"));

  if (ok < 8 || ok > 128) {
    alert("Please enter a number between 8 - 128, thank you!")
  } else {
    includeAlphabet = confirm("Would you like your password to have lowercase letters?");
    includeAlphabetCapital = confirm("Would you like your password to contain uppercase letters?");
    includeNumbers = confirm("Would you like to include numbers in your password?");
    includeSpecialChar = confirm("Would you like to include special characters in your password?");
  }

  // I will use this to collect and condense different choice outcomes to one variable for the randomizing function
  var passwordOptions;
  
  if (includeAlphabet == true) {
    passwordOptions = alphabet;
  } else if (includeAlphabetCapital == true) {
    passwordOptions = alphabet_capital;
  } else if (includeNumbers == true) {
    passwordOptions = numbers;
  } else if (includeSpecialChar == true) {
    passwordOptions = special_characters;
  } else if ((includeAlphabet == true) && (includeAlphabetCapital == true)) {
    passwordOptions = alphabet.concat(alphabet_capital);
  } else if ((includeAlphabet == true) && (includeNumbers == true)) {
    passwordOptions = alphabet.concat(numbers);
  } else if ((includeAlphabet == true) && (includeSpecialChar == true)) {
    passwordOptions = alphabet.concat(special_characters);
  } else if ((includeAlphabetCapital == true) && (includeNumbers == true)) {
    passwordOptions = alphabet_capital.concat(numbers);
  } else if ((includeAlphabetCapital == true) && (includeSpecialChar == true)) {
    passwordOptions = alphabet_capital.concat(special_characters);
  } else if ((includeNumbers == true) && (includeSpecialChar == true)) {
    passwordOptions = numbers.concat(special_characters);
  } else if ((includeAlphabet == true) && (includeAlphabetCapital == true) && (includeNumbers == true)) {
    passwordOptions = alphabet.concat(alphabet_capital, numbers);
  } else if ((includeAlphabet == true) && (includeNumbers == true) && (includeSpecialChar == true)) {
    passwordOptions = alphabet.concat(numbers, special_characters);
  } else if ((includeAlphabetCapital == true) && (includeNumbers == true) && (includeSpecialChar == true)) {
    passwordOptions = alphabet_capital.concat(numbers, special_characters);
  } else if ((includeAlphabet == true) && (includeAlphabetCapital == true) && (includeNumbers == true) && (includeSpecialChar == true)) {
    passwordOptions = alphabet.concat(alphabet_capital, numbers, special_characters);
  }

  function generatePassword(length, passwordOptions) {
    let password = "";
    for (let i = 0; i < length; i++) {
      password += passwordOptions.charAt(
        Math.floor(Math.random() * passwordOptions.length)
      );
    }
    return password;
  }
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
