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

var combinedArr = [];
var password = [];

// Example
// var combinedArr = uppercase.concat(numbers, lowercase, symbols);

// Push characters into master array based on user selections
      // If select lowercase, push lowerStr into combinedArr
      // If select uppercase, push upperStr into combinedArr
      // If select numbers, push numberStr into combinedArr
      // If select symbols, push symbolStr into combinedArr

if ((lowerStr !== true) && (upperStr !== true) && (numberStr !== true) && (symbolStr !== true)) {
  alert("You must select at least one criteria!");
} 
// else if (lowerInput === true) {
//   combinedArr = combinedArr.concat(lowerInput);
// }

// function generatePassword() {
      // combinedArr = combinedArr.concat(lowerStr, upperStr);

// Based on length chosen, create for loop that loops # of length times and randomly pulls from master array & pushes into a new "array" for pw
for (var i=0; i < lengthInput; i++) {
  password.push(Math.floor(Math.random) * combinedArr.length)
}
// }
// Print the pw to the box


console.log(password);

 
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
