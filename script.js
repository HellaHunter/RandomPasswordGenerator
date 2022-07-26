// Assignment Code
const alphabet = ["a","b""c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const alphabet_capital = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numbers = ["1","2","3","4","5","6","7","8","9","0"];
const special_characters = ["!","@","#","$","&","_","-","+","?","."];

var generateBtn = document.querySelector("#generate");

console.log()

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");
  window.prompt("Select criteria for your password below!");

  var length = Number(prompt("How many characters will your password be? Enter a number between 8 - 128"));
    if (length < 8 || length > 128) {
      alert("Please choose between 8 - 128")
    }
  }

  var passwordOptions = "";
  if (confirm("Do you want to include lowercase letters? Select OK to confirm") == true) {
    passwordOptions = alphabet;
  } 
  if (confirm("Do you want to include uppercase letters? Select OK to confirm") == true) {
    passwordOptions = alphabet_capital;
  }
  if (confirm("Do you want to include numbers? Select OK to confirm") == true) {
    passwordOptions = numbers;
  }
  if (confirm("Do you want to include lowercase letters? Select OK to confirm") == true) {
    passwordOptions = special_characters;
  }
  

  function generatePassword(length, characters) {
    let charSet = "";
    for (let i = 0; i < length; i++) {
      charSet += passwordOptions.charAt(
        Math.floor(Math.random() * passwordOptions.length)
      );
    }
    return charSet;
  }
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
