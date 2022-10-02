// Assignment code here
function generatePassword(){

  var userInput = window.prompt("How long do you want the password? 8-128 characters long")
  
  var passwordLength = parseInt(userInput)

  if(isNaN(passwordLength)){
    window.alert("Try again, that is not a number!")

  }

  // if(isNaN(passwordLength < 8)){
  //   window.alert("Please enter a password longer than 8 characters.")
  // }




}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
