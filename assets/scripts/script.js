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
	validateInput: function(attribute) {
		var responseBool = false; // Status of user input. True if valid. False if not.
		var response = "";
		var exitProgram = false; // If user cancels prompt, exit the program.

		 // Only repeat the loop when exitProgram is false and responseBool is false
		while(!exitProgram && !responseBool) {
			if (attribute !== "specialCharacters") {
				response = prompt("Include " + attribute + " characters?\nEnter yes or no.");
			} else {
				response = prompt("Include special characters?\nEnter yes or no.");
			}
			
			if (response === null) {
				exitProgram = true;
				continue;
			} else {
				response = response.toLowerCase();
			}

			responseBool = response === 'yes' || response === 'no';

			if (!responseBool) {
				alert("Your response was neither a yes or a no. Please try again.");
			} else {
				this[attribute] = response === 'yes';
			}
		}

		return !exitProgram; // If the user cancels the input, the input is not verified and therefore this method will return false
	},
	
	// Returns true if at least one password criteria is accepted. Returns false if all are rejected.
	validateAll: function() {
		return this.lowercase || this.uppercase || this.numeric || this.specialCharacters;
	},

	// Uses random numbers to select characters from an array generated by the user's choices.
	createPassword: function () {
		var characterList = this.generateAvailableCharacters(this.lowercase, this.uppercase, this.numeric, this.specialCharacters);
		var password = "";
		for (var i = 0; i < this.length; i++) {
			password = password + characterList[Math.floor(Math.random() * characterList.length)];
		}
		this.value = password;
	},
	
	// Hard coded arrays to generate an array specific to the user's choices.
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

function exitProgram() {
	
}

function generatePassword() {
	// Taking Input. Use the while true loop to repeat input until user enters correct input or exits the prompts.
	var exitProgram = false; // Status flag to check if the user wants to exit the prompts.
	password.value = "";
	var validInput = true; // Status flag for valid input.
	var lengthInput;
	var criteria = ["lowercase", "uppercase", "numeric", "specialCharacters"];

	inputLoop:
	while (!exitProgram) {
		// TODO: Catch null return and exit program for all inputs
		lengthInput = prompt("Enter a password length between 8 and 128 characters inclusive:");
		if (lengthInput === null) {
			console.log("User exited the prompt. Exiting program.");
			alert("Prompt has been canceled. Exiting the password generator program");
			exitProgram = true;
			break;
		}

		password.length = parseInt(lengthInput);
		if (isNaN(password.length) || !password.validateLength()) {
			alert("The inputted password length is not valid. Please specify a number between 8 and 128 inclusive.\n\nYour input was: " + lengthInput);
			continue;
		}

		console.log("Password length: " + password.length);

		// Validate each input for a yes or no response.
		for (var i = 0; i < criteria.length; i++) {
			validInput = password.validateInput(criteria[i]);
		
			// Exit program if user cancels prompt
			if (!validInput) {
				exitProgram = true;
				break inputLoop; // Will break out of the inputLoop if a user does not provide a valid input.
			}
			console.log(criteria[i] + ": " + password[criteria[i]]);
		}

		// Validate all inputs as long as the user hasn't exited any prompts. 
		if (!password.validateAll()) {
			alert("You must specify at least one of the following character types: lowercase, uppercase, numeric, and or special characters");
			continue;
		}

		// Password Generation
		if (!exitProgram) {
			return password.createPassword();
		} else {
			return null;
		}
	}
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	if (!password === null) {
  		var passwordText = document.querySelector("#password");
  		passwordText.value = password;
	} else {
		return "";
	}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);