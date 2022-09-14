// Assignment code here

function generatePassword() {
	function generateCharacterArray(start, end, step = 1) {
		var result = [];
		for (var i = start; i <= end; i += step) {
			result = result.concat([String.fromCharCode(i)]);
		}
		return result;
	}

	function generateAvailableCharacters(lowercase, uppercase, numeric, specialCharacters) {
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
		validate: function () {
			return this.lowercase || this.uppercase || this.numeric || this.specialCharacters;
		},
		generatePassword: function () {
			var characterList = generateAvailableCharacters(this.lowercase, this.uppercase, this.numeric, this.specialCharacters);

		}
	}

	// Taking Input
	while (true) {
		password.length = parseInt(prompt("Enter a password length between 8 and 128 characters inclusive:"));
		if (password.validateLength()) {
			password.lowercase = prompt("Include lowercase characters?\nEnter yes or no.").toLowerCase() === 'yes';
			password.uppercase = prompt("Include uppercase characters?\nEnter yes or no.").toLowerCase() === 'yes';
			password.numeric = prompt("Include numbers?\nEnter yes or no.").toLowerCase() === 'yes';
			password.specialCharacters = prompt("Include special characters?\nEnter yes or no.").toLowerCase() === 'yes';
			
			console.log(password);

			if (password.validate()) {
				break;
			} else {
				alert("You must specify at least one of the following character types");
			}
		} else {
			alert("The length entered was incorrect. Length must be between 8 and 128 inclusive.");
		}
	}

	// Password Generation
	password.generatePassword();
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
