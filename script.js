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
// Prompt user with options of password criteria to select from
// After user selects options, prompt user for length of pw
// User must enter length of at least 8 characters and no more than 128 characters
// Prompt user for character types to include in pw (options include lowercase, uppercase, numeric and/or special characters)
// After user answers each prompt, the input should be validated and at least one character type should be selected
// After all prompts are answered, pw is generated that matches the selected criteria
// Display pw as either an alert or written on pg
