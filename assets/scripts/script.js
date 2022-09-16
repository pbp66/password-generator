// Assignment code here
// TODO: Create Constructor for password object?

function generateCharacterArray(start, end, step = 1) {
	var result = [];
	for (var i = start; i <= end; i += step) {
		result = result.concat([String.fromCharCode(i)]);
	}
	return result;
}

// TODO: Move to the password object? This method depends on the attributes of password.
function generateAvailableCharacters(lowercase, uppercase, numeric, specialCharacters) {
	// TODO: Change from method to hard-coded array lists? Uses more memory but saves on runtime?
	// TODO: Or, come up with conditionals in this function to generate an array only once?
	var characterList = [];
	if (lowercase) {
		characterList = characterList.concat(generateCharacterArray(97, 122));
	}
	if (uppercase) {
		characterList = characterList.concat(generateCharacterArray(65, 90));
	}
	if (numeric) {
		characterList = characterList.concat(generateCharacterArray(48, 57));
	}
	if (specialCharacters) {
		characterList = characterList.concat(generateCharacterArray(32, 47));
		characterList = characterList.concat(generateCharacterArray(58, 64));
		characterList = characterList.concat(generateCharacterArray(91, 96));
		characterList = characterList.concat(generateCharacterArray(123, 126));
	}
	return characterList;
}

// The password object. Used to store information regarding the password criteria
var password = {
	value: "",
	length: 0,
	lowercase: "",
	uppercase: "",
	numeric: "",
	specialCharacters: "",
	validateLength: function() {
		return this.length >= 8 && this.length <= 128;
	},
	validateCriteria: function () {
		return this.lowercase || this.uppercase || this.numeric || this.specialCharacters;
	},
	createPassword: function () {
		var characterList = this.generateAvailableCharacters(this.lowercase, this.uppercase, this.numeric, this.specialCharacters);
		var password = "";
		for (var i = 0; i < this.length; i++) {
			password = password + characterList[Math.floor(Math.random() * characterList.length)];
		}
		return password;
	},
	generateAvailableCharacters: function() {
		// TODO: Change from method to hard-coded array lists? Uses more memory but saves on runtime?
		// TODO: Or, come up with conditionals in this function to generate an array only once?
		var characterList = [];
		if (this.lowercase) {
			characterList = characterList.concat(generateCharacterArray(97, 122));
		}
		if (this.uppercase) {
			characterList = characterList.concat(generateCharacterArray(65, 90));
		}
		if (this.numeric) {
			characterList = characterList.concat(generateCharacterArray(48, 57));
		}
		if (this.specialCharacters) {
			characterList = characterList.concat(generateCharacterArray(32, 47));
			characterList = characterList.concat(generateCharacterArray(58, 64));
			characterList = characterList.concat(generateCharacterArray(91, 96));
			characterList = characterList.concat(generateCharacterArray(123, 126));
		}
		return characterList;
	}
}

function generatePassword() {
	// Taking Input. Use the while true loop to repeat input until user enters correct input.
	while (true) {
		password.length = parseInt(prompt("Enter a password length between 8 and 128 characters inclusive:"));
		if (password.validateLength()) {
			// TODO: Validate if user input is a yes or no
			password.lowercase = prompt("Include lowercase characters?\nEnter yes or no.").toLowerCase() === 'yes';
			password.uppercase = prompt("Include uppercase characters?\nEnter yes or no.").toLowerCase() === 'yes';
			password.numeric = prompt("Include numbers?\nEnter yes or no.").toLowerCase() === 'yes';
			password.specialCharacters = prompt("Include special characters?\nEnter yes or no.").toLowerCase() === 'yes';

			if (password.validateCriteria()) {
				break;
			} else {
				alert("You must specify at least one of the following character types: lowercase, uppercase, numeric, and or special characters");
			}
		} else {
			alert("The length entered was incorrect. Length must be between 8 and 128 inclusive.");
		}
	}

	// Password Generation
	this.value = password.createPassword();
	return this.value;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
  	var passwordText = document.querySelector("#password");

  	passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);