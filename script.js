// Assigns button to variable generateBtn
var generateBtn = document.querySelector("#generate");

// Possible password characters
var lowerStr = 'abcdefghijklmnopqrstuvwxyz';
var upperStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numberStr = '0123456789';
var symbolStr = '@%+"/\'!#$^?:,)(}{][~-_.';

// Function definition to display password to user
function writePassword(event) {
  event.preventDefault()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  passwordText.style.color = "#222222";
}

// Create pw based on length input and criteria selection
function generatePassword() {
  
  var combinedStr = '';
  var passwordStr = '';

  if (document.getElementById('lowerInput').checked) {
    combinedStr = combinedStr.concat(lowerStr);
  }
  if (document.getElementById('upperInput').checked) {
    combinedStr = combinedStr.concat(upperStr);
  }
  if (document.getElementById('numberInput').checked) {
    combinedStr = combinedStr.concat(numberStr);
  }
  if (document.getElementById('symbolInput').checked) {
    combinedStr = combinedStr.concat(symbolStr);
  }
  
  for (var i=0; i < document.getElementById('lengthInput').value; i++) {
    passwordStr = passwordStr + combinedStr.charAt(Math.floor(Math.random() * combinedStr.length));
  }
  
  return passwordStr;
}

// Create error messages if length not specified, length requirements not met, or if no criteria specified
function errorMsg(event) {
  var passwordText = document.querySelector("#password");

  if (document.getElementById('lengthInput').value === null || document.getElementById('lengthInput').value === "") {
    passwordText.value = "ERROR:\n\nYou must specify a password length";
    passwordText.style.color = "#ff5c5c";
    passwordText.style.fontFamily = "Roboto Mono", monospace;
  }
  else if (document.getElementById('lengthInput').value < 8 || document.getElementById('lengthInput').value > 128) {
    passwordText.value = "ERROR:\n\nPassword must be between 8 and 128 characters";
    passwordText.style.color = "#ff5c5c";
  }
  else if (
    (document.getElementById('lowerInput').checked !== true) && 
    (document.getElementById('upperInput').checked !== true) && 
    (document.getElementById('numberInput').checked !== true) && 
    (document.getElementById('symbolInput').checked !== true)) {
      passwordText.value = "ERROR:\n\nYou must select at least one criteria";
      passwordText.style.color = "#ff5c5c";
  }
}

function showHide() {
  var x = document.getElementById('entire-form');
  if (x.style.display === "none") {
    x.style.display = "block";
  }  
  else {
    x.style.display = "block"
  }
}

// When button is clicked, writePassword & errorMsg runs
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", errorMsg);