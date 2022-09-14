// Assignment code here
// var specialCharacters = ["!", "#", "\"", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

function generatePassword() {

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
