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
if ((lowerInput !== true) && (upperInput !== true) && (numberInput !== true) && (symbolInput !== true)) {
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

console.log(combinedStr);

console.log(combinedStr.charAt(Math.floor(Math.random() * combinedStr.length)));

// Function creates pw based on length input and criteria selection
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {

  for (var i=0; i < lengthInput; i++) {
    password = password + combinedStr.charAt(Math.floor(Math.random() * combinedStr.length));
    // password.push(combinedStr.charAt(Math.floor(Math.random() * combinedStr.length)))
  }
  return password;

}
// Print the pw to the box


console.log(generatePassword());
writePassword();
 
  // If no criteria selected, then return error
  // If length not specified, then return error
  // If lowercase only specified, then return only lowercase
  // if (document.getElementById("lowerCheck").checked) {
  //   console.log("checked");
  // } else {
  //   console.log("not checked");
  // };

  // If uppercase only specified, then return only lowercase
  // If numbers only specified, then return only lowercase
  // If symbols only specified, then return only lowercase
  // lower + upper
  // lower + numbers
  // lower + symbols
  // ...
  // return "whatever the pw text is";
// }

// Write password to the #password input
// Declares a function writePassword
// function writePassword() {
//   // returns back password from fuction generatePassword()
//   var password = generatePassword();
//   // Selects the HTML element (textarea that says 'Your Secure Password') and assigns it to the var passwordText
//   var passwordText = document.querySelector("#password");
//   // Sets the value of passwordText to password
//   passwordText.value = password;

// }

// Add event listener to generate button
// When the button is clicked, writePassword function will run 
// generateBtn.addEventListener("click", writePassword);

// User clicks button
// Prompt user to select password criteria

// prompt("Select criteria for your password:")

// User selects pw criteria:
// Length must be at least 8 characters and no more than 128 characters
// User selects lowercase, uppercase, numeric and/or special characters
// After user answers each prompt, the input should be validated and at least one character type should be selected

// After all prompts are answered, pw is generated that matches the selected criteria

// console.log(generatePassword);

// console.log(randomLower);
// console.log(randomUpper);
// console.log(randomSymbol);
// console.log(randomNumber);

// Display pw as either an alert or written on pg
