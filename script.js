// Assigns button to variable generateBtn
var generateBtn = document.querySelector("#generate");

var lengthInput = prompt("What is the length of your password?")
var lowerInput = confirm("Do you want to include lowercase?")
var upperInput = confirm("Do you want to include uppercase?")
var numberInput = confirm("Do you want to include numbers?")
var symbolInput = confirm("Do you want to include symbols?")

// Possible password characters
var lowerStr = 'abcdefghijklmnopqrstuvwxyz';
var upperStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numberStr = '0123456789';
var symbolStr = '@%+"/\'!#$^?:,)(}{][~-_.';

// Master array based on criteria selection
var combinedStr = '';

// Password generated based on criteria selection
var password = '';

// Push characters into master array based on user selections
if (lengthInput === null || lengthInput === "") {
  alert("You must specify a password length.");
} else if ((lowerInput !== true) && (upperInput !== true) && (numberInput !== true) && (symbolInput !== true)) {
  alert("You must select at least one criteria!");
} 
if (lowerInput === true) {
  combinedStr = combinedStr.concat(lowerStr);
}
if (upperInput === true) {
  combinedStr = combinedStr.concat(upperStr);
}
if (numberInput === true) {
  combinedStr = combinedStr.concat(numberStr);
}
if (symbolInput === true) {
  combinedStr = combinedStr.concat(symbolStr);
}

// Testing if master array works
console.log(combinedStr);

// Testing if random selection from master array works
console.log(combinedStr.charAt(Math.floor(Math.random() * combinedStr.length)));

// Function definition to display password to user
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Create pw based on length input and criteria selection
function generatePassword() {
  for (var i=0; i < lengthInput; i++) {
    password = password + combinedStr.charAt(Math.floor(Math.random() * combinedStr.length));
    // password.push(combinedStr.charAt(Math.floor(Math.random() * combinedStr.length)))
  }
  return password;
}

// Testing if generated pw matches selected criteria
console.log(generatePassword());

// Calls the function to display password to user
writePassword();
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
