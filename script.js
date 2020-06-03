// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// User clicks button
// Prompt user with options of password criteria to select from
// After user selects options, prompt user for length of pw
// User must enter length of at least 8 characters and no more than 128 characters
// Prompt user for character types to include in pw (options include lowercase, uppercase, numeric and/or special characters)
// After user answers each prompt, the input should be validated and at least one character type should be selected
// After all prompts are answered, pw is generated that matches the selected criteria
// Display pw as either an alert or written on pg
