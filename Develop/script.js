// Assignment code here
function randomInt(min, max){
  if (!max){
    max = min
    min = 0
  }
  var ran = Math.random()
  return Math.floor(min*(1-ran) + ran*max)
}

function getRandomItem(list){
  return list[randomInt(list.length)]
}

function generatePassword(){

  var userInput = window.prompt("How long do you want the password?")
  
  var passwordLength = parseInt(userInput)

  if(isNaN(passwordLength)){
    window.alert("Try again, that is not a number!")
    return
  }

  if (passwordLength < 8 || passwordLength > 128){
    window.prompt("Choose a number between 8-128")
    return
  }

var selectLowercase = window.confirm("Would you like to have lowercase letters in your password?")
var selectUppercase = window.confirm("Would you like to have uppercase letters in your password?")
var selectNumbers = window.confirm("Would you like to have numbers in your password?")
var selectSymbols = window.confirm("Would you like to have symbols in your password?")

var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbersList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var symbolsList = ["!", "@", "#", "$", "%", "&", "*", "_", "-", "?"]

var passwordCriteria = []

if (selectLowercase){
passwordCriteria.push(lowercaseList)
}

if (selectUppercase){
passwordCriteria.push(uppercaseList)
}

if (selectNumbers){
passwordCriteria.push(numbersList)
}

if (selectSymbols){
passwordCriteria.push(symbolsList)
}

if (!selectLowercase + !selectUppercase + !selectNumbers + !selectSymbols){
  window.alert("You must select at least one characteristic for your password!")
  return
}

console.log(passwordCriteria)

var generatePassword = ""

for (var i = 0; i < passwordLength; i++){
  var randomList = getRandomItem(passwordCriteria)
  var randomSym = getRandomItem(randomList) 
  console.log(randomSym)
  generatePassword += randomSym
}




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
