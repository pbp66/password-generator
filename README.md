# Password Generator

## Description
User Story: As an employee with access to sensitive data, I want to randomly generate a password that meets certain criteria, so that I can create a strong password that provides greater security.

Acceptance Criteria: When I need a new and secure password, I click the button to generate a password and I am presented with a series of prompts for password criteria. When prompted for password criteria, I select which criteria to include in the password. When prompted for the length of the password, I choose a length of at least 8 characters and no more than 128 characters. When asked for character types to include in the password, I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters. When I answer each prompt, my input should be validated and at least one character type should be selected. When all prompts are answered, a password is generated that matches the selected criteria. When the password is generated, the password is either displayed in an alert or written to the page.

I wanted to build a script to explore java objects, conditionals, methods, loops, etc. Generating a password with selectable criteria allows me to explore these concepts. By mapping all usable characters to an array, I can use a random number generator to randomly select characters from that array and generate a random password. I learned how to use the array concat() method to dynamically generate the character array based on user input. Each input is validated for a correct response. If not, it will prompt the user to repeat the input unless the user cancels out of the prompt.

---
## Installation

There is nothing to install with this project. To see the final product, please visit this webpage: [https://pbp66.github.io/password-generator/](https://pbp66.github.io/password-generator/)

---
## Usage

Upon visiting the website, you will come across the password generator in the center of the site. Clicking the red button labeled "Generate Password" will start the script and begin prompting you for password criteria.

![Click a large red button to generate a password](./assets/images/password-generator-overview.png)

After clicking the button, the length prompt appears at the top of your browser:

![Prompt appears asking you to input a password length between 8 and 128 characters inclusive.](./assets/images/length-criteria.png)

It will ask you to enter a number from 8 to 128 inclusive. This number will be the length of your password. If you enter a number outside of the range or a non-numeric character, you will receive the following alert:

![Alert indicating the entered length was incorrect.](./assets/images/wrong-length-input.png)

Click ok and the program will redirect you back to the length input to try again.
Upon successful input, you will be prompted to include or exclude lowercase characters (a-z) by entering a yes or a no.

![Prompt to include lowercase characters in the password generation.](./assets/images/lowercase-input.png)

Upon successful input, you will be prompted to include or exclude uppercase characters (A-Z) by entering a yes or a no.

![Prompt to include uppercase characters in the password generation.](./assets/images/uppercase-input.png)

Upon successful input, you will be prompted to include or exclude numeric characters (0-9) by entering a yes or a no.

![Prompt to include numeric characters in the password generation.](./assets/images/numeric-input.png)

Upon successful input, you will be prompted to include or exclude special characters ( !"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~) by entering a yes or a no.

![Prompt to include special characters in the password generation.](./assets/images/special-character-input.png)

If you input a response that is neither a yes nor a no, e.g. 4, hi, asldkfhj, etc, you will receive the alert below. Clicking ok will redirect you back to the previous question for proper input.

![Alert indicating neither a yes nor a no was entered.](./assets/images/wrong-input.png)

If you enter no for all criteria, you will receive the alert below. Clicking ok will redirect you to the beginning of the prompts to start over. 

![Alert indicating that all criteria was excluded from selection. At least one of the above criteria must be selected.](./assets/images/no-criteria-specified.png)

To exit the password generation early, select cancel at any of the prompts. This will end the prompts. To proceed back through the password generation script, click the generate password button again.

---
## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

---
## License

MIT License Copyright (c) 2022

---
