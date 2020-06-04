// Assignment Code
// Selects the HTML element (button) with id "generate" and assigns it to the var generateBtn
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// Declares a function writePassword
function writePassword() {
  // 
  var password = generatePassword();
  // Selects the HTML element (textarea that says 'Your Secure Password') and assigns it to the var passwordText
  var passwordText = document.querySelector("#password");
  // Sets the value of passwordText to password
  passwordText.value = password;

}

// Add event listener to generate button
// When the button is clicked, writePassword function will run 
generateBtn.addEventListener("click", writePassword);

// User clicks button
// Prompt user to select password criteria
var lengthInput = prompt("What is the length of your password?")
// prompt("Select criteria for your password:")

// User selects pw criteria:
// Length must be at least 8 characters and no more than 128 characters
// User selects lowercase, uppercase, numeric and/or special characters

// After user answers each prompt, the input should be validated and at least one character type should be selected

// After all prompts are answered, pw is generated that matches the selected criteria
var lowerStr = 'abcdefghijklmnopqrstuvwxyz';
var upperStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var symbolStr = ['@', '%', '+', '', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

var randomLower = lowerStr.charAt(Math.floor(Math.random() * 26));
var randomUpper = upperStr.charAt(Math.floor(Math.random() * 26));
var randomSymbol = symbolStr[(Math.floor(Math.random() * symbolStr.length))];
var randomNumber = Math.floor(Math.random() * 10);

var charArr = [randomLower, randomUpper, randomSymbol, randomNumber];

var password = "";

for (var i=1; i <= lengthInput; i++) {
  password = password + (charArr[Math.floor(Math.random() * 4)]);
}

console.log(password);

// function check () {
//   document.getElementById("pwLower").checked
// }
// if (document.getElementById("pwLower").checked) {
//   console.log(lowercaseStr.charAt(Math.floor(Math.random() * 26)));
// }

// function generatePassword(); 

// console.log(randomLower);
// console.log(randomUpper);
// console.log(randomSymbol);
// console.log(randomNumber);

// Display pw as either an alert or written on pg
