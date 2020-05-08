var charSet = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
var num = 1234567890;
var charSpecial = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  for (var i = 0; i <= 8; i++) {
    var chars = Math.floor(Math.random() * 10) + 1;
}
// Assignment Code
var userInput = prompt("Please select a password length? (Between 8-128 characters)"
);
for (var i = 0; i < userInput; i++) {
  var num = Math.floor(Math.random() * 10) + 1;
  console.log(num);
}
var upperCase = confirm("Do you want to include upper case letters?");
if (upperCase === false) {
  charSet = charSet.toLowerCase();
  var computerUpper = charSet[Math.floor(Math.random() * charSet.length)];
  console.log(computerUpper);
} else {
  var computerLower = charSet[Math.floor(Math.random() * charSet.length)];
  console.log(computerLower);
}
var specialCharacters = confirm("Do want to include special characters?");
if (specialCharacters === true) {
  var userSpSel = charSpecial[Math.floor(Math.random() * charSet.length)];
  console.log(userSpSel);
}
var numbers = confirm("Do you want to inlucde numbers?");
if (numbers === true) {
  var userSpSel = numbers[Math.floor(Math.random() * charSet.length)];
  console.log(userSpSel);
}



console.log(window);
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