// The password object. Used to store information regarding the password criteria
var password = {
	value: "",
	length: 0,
	lowercase: "",
	uppercase: "",
	numeric: "",
	specialCharacters: "",
	validateLength: function() {
		// TODO: Catch null return and exit program.
		return this.length >= 8 && this.length <= 128;
	}, 
	validateInput: function(attribute) {
		// TODO: Catch null return and exit program.
		var responseBool = false;
		var response = "";
		while(!responseBool) {
			if (attribute !== "specialCharacters") {
				response = prompt("Include " + attribute + " characters?\nEnter yes or no.").toLowerCase();
			} else {
				response = prompt("Include special characters?\nEnter yes or no.").toLowerCase();
			}
			responseBool = response === 'yes' || response === 'no';
			if (!responseBool) {
				alert("Your response was neither a yes or a no. Please try again.");
			} else {
				this[attribute] = response === 'yes';
			}
		}
	},
	validateAll: function() {
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
		var characterList = [];
		if (this.lowercase) {
			characterList = characterList.concat(['a', 'b', 'c', 'd', 'e', 'f', 
			'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 
			't', 'u', 'v', 'w', 'x', 'y', 'z']);
		}
		if (this.uppercase) {
			characterList = characterList.concat(['A', 'B', 'C', 'D', 'E', 'F', 
			'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 
			'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);
		}
		if (this.numeric) {
			characterList = characterList.concat(['0', '1', '2', '3', '4', '5', 
			'6', '7', '8', '9']);
		}
		if (this.specialCharacters) {
			characterList = characterList.concat([' ', '!', '"', '#', '$', '%', 
			'&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', 
			'=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', 
			'~']);
		}
		return characterList;
	}
}

function generatePassword() {
	// Taking Input. Use the while true loop to repeat input until user enters correct input.
	while (true) {
		password.length = parseInt(prompt("Enter a password length between 8 and 128 characters inclusive:"));
		if (password.validateLength()) {
			// Validate each input for a yes or no response.
			password.validateInput("lowercase");
			password.validateInput("uppercase");
			password.validateInput("numeric");
			password.validateInput("specialCharacters");

			if (password.validateAll()) {
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