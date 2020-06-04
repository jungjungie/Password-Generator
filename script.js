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
// prompt("Select criteria for your password:")

// User selects pw criteria:
// Length must be at least 8 characters and no more than 128 characters
// User selects lowercase, uppercase, numeric and/or special characters

// After user answers each prompt, the input should be validated and at least one character type should be selected

var lowerStr = 'abcdefghijklmnopqrstuvwxyz';
var upperStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var symbolStr = ['@', '%', '+', '', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

console.log(lowerStr.charAt(
  Math.floor(
    Math.random() * 26)
    ));

console.log(upperStr.charAt(
  Math.floor(
    Math.random() * 26)
    ));

console.log(symbolStr[(
  Math.floor(
    Math.random() * symbolStr.length)
    )]);

console.log(Math.floor(
    Math.random() * 10)
    );

// function check () {
//   document.getElementById("pwLower").checked
// }
// if (document.getElementById("pwLower").checked) {
//   console.log(lowercaseStr.charAt(Math.floor(Math.random() * 26)));
// }

// After all prompts are answered, pw is generated that matches the selected criteria
// Display pw as either an alert or written on pg
