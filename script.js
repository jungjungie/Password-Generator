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
}

// Create pw based on length input and criteria selection
function generatePassword() {
  
  var combinedStr = '';
  var passwordStr = '';

  // Alert if no length input specified 
  // if (document.getElementById('lengthInput') === null || document.getElementById('lengthInput') === "") {
  //   alert("You must specify a password length.");
  // }

  // Alert if no criteria selected
  // if (
  // (document.getElementById('lowerInput').checked !== true) && 
  // (document.getElementById('upperInput').checked !== true) && 
  // (document.getElementById('numberInput').checked !== true) && 
  // (document.getElementById('symbolInput').checked !== true)) {
  //   return errorMsg;
  //   // alert("You must select at least one criteria.");

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

function errorMsg(event) {
  var passwordText = document.querySelector("#password");

  if (document.getElementById('lengthInput').value === null || document.getElementById('lengthInput').value === "") {
  passwordText.value = "ERROR: You must specify a password length.";
  }
  else if (
    (document.getElementById('lowerInput').checked !== true) && 
    (document.getElementById('upperInput').checked !== true) && 
    (document.getElementById('numberInput').checked !== true) && 
    (document.getElementById('symbolInput').checked !== true)) {
  passwordText.value = "ERROR: You must select at least one criteria.";
  }
}

console.log(errorMsg);

// When button is clicked, writePassword runs
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", errorMsg);





// var lengthInput = prompt("What is the length of your password?")
// var lowerInput = confirm("Do you want to include lowercase?")
// var upperInput = confirm("Do you want to include uppercase?")
// var numberInput = confirm("Do you want to include numbers?")
// var symbolInput = confirm("Do you want to include symbols?")



// Master array based on criteria selection
// var combinedStr = '';

// Password generated based on criteria selection
// var password = '';

// if (lengthInput === null || lengthInput === "") {
//   alert("You must specify a password length.");
// } else if ((lowerInput !== true) && (upperInput !== true) && (numberInput !== true) && (symbolInput !== true)) {
//   alert("You must select at least one criteria!");
// } 
// if (lowerInput === true) {
//   combinedStr = combinedStr.concat(lowerStr);
// }
// if (upperInput === true) {
//   combinedStr = combinedStr.concat(upperStr);
// }
// if (numberInput === true) {
//   combinedStr = combinedStr.concat(numberStr);
// }
// if (symbolInput === true) {
//   combinedStr = combinedStr.concat(symbolStr);
// }

// Testing if master array works
// console.log(combinedStr);

// Testing if random selection from master array works
// console.log(combinedStr.charAt(Math.floor(Math.random() * combinedStr.length)));

// Create pw based on length input and criteria selection
// function generatePassword() {

  // Push characters into master array based on user selections
  // if (lengthInput === null || lengthInput === "") {
  //   alert("You must specify a password length.");
  // } else if ((lowerInput.checked == false) && (upperInput.checked == false) && (numberInput.checked == false) && (symbolInput.checked == false)) {
  //   alert("You must select at least one criteria!");
  // } 
  

// Testing if generated pw matches selected criteria
// console.log(generatePassword());

// Calls the function to display password to user
// writePassword();
 

