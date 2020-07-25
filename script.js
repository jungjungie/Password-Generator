// 'Generate Password' button
let generateBtn = document.querySelector('#generate');

// Possible password characters
let lowerStr = 'abcdefghijklmnopqrstuvwxyz';
let upperStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let numberStr = '0123456789';
let symbolStr = "@%+'!#$^?:,)(}{][~-_.";
let passwordStr = '';
let includesLowercase = false;
let includesUppercase = false;
let includesNumber = false;
let includesSymbol = false;

// Function to display password to user
function writePassword(event) {
	event.preventDefault()

	let password = generatePassword();
	let passwordText = document.querySelector('#password');

	passwordText.value = password;
	passwordText.style.color = '#222222';
}

// Function to create pw based on length input and criteria selection
function generatePassword() {
	let combinedStr = '';
	passwordStr = ''

	typeArr.map(obj => {
		return {
			...obj,
			included: false,
		}
	})

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

	for (let i = 0; i < document.getElementById('lengthInput').value; i++) {
		passwordStr = passwordStr + combinedStr.charAt(Math.floor(Math.random() * combinedStr.length));
	}

	checkPassword();
	return passwordStr;
}

// Array of character types to select from
const typeArr = [ 
	{
		charList: 'abcdefghijklmnopqrstuvwxyz',
		input: 'lowerInput'
	}, 
	{
		charList: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
		input: 'upperInput'
	},
	{
		charList: '0123456789',
		input: 'numberInput'
	},
	{
		charList: "@%+'!#$^?:,)(}{][~-_.",
		input: 'symbolInput'
	}
]

// Checks to see if selected criteria are all in the generated password, else it generates another password
function checkPassword() {
	typeArr.forEach(obj => {
		if (document.getElementById(obj.input).checked) {
			const indx = obj.charList.split("").findIndex(char => passwordStr.includes(char));
			if (indx === -1){
				generatePassword();
			}
		}
	})
}

// Function to create error messages if length not specified, length requirements not met, or if no criteria specified
function errorMsg(event) {
	let passwordText = document.querySelector('#password');

	if (document.getElementById('lengthInput').value === null || document.getElementById('lengthInput').value === '') {
		passwordText.value = 'Specify a password length between 8 and 128 characters.';
		passwordText.style.color = '#ff5c5c';
		passwordText.style.fontFamily = 'Roboto Mono';
	}
	else if (document.getElementById('lengthInput').value < 8 || document.getElementById('lengthInput').value > 128) {
		passwordText.value = 'Password must be between 8 and 128 characters';
		passwordText.style.color = '#ff5c5c';
	}
	else if (
		(document.getElementById('lowerInput').checked !== true) &&
		(document.getElementById('upperInput').checked !== true) &&
		(document.getElementById('numberInput').checked !== true) &&
		(document.getElementById('symbolInput').checked !== true)) {
		passwordText.value = 'You must select at least one criteria';
		passwordText.style.color = '#ff5c5c';
	}
}

// When button is clicked, writePassword & errorMsg runs
generateBtn.addEventListener('click', writePassword);
generateBtn.addEventListener('click', errorMsg);