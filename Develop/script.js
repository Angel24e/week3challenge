var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var upperCase = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];

var lowerCase = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];

var specialCharacters = ['`','~','!','@','#','$','%','^','&','*','(',')','_','-','+','=','[','{',']','}',';',':','<',',','.','>','/','?'];

function getPasswordCriteria() {
  var userChoseNumbers = confirm("Do you want numbers in your password?");
  var userChoseUpperCase = confirm("Do you want upper case letters in your password?");
  var userChoseLowerCase = confirm("Do you want lower case letters in your password?");
  var userChoseSpecialCharacters = confirm("Do you want special characters in your password");
  var options = {
    userChoseNumbers: userChoseNumbers,
    userChoseUpperCase: userChoseUpperCase,
    userChoseLowerCase: userChoseLowerCase,
    userChoseSpecialCharacters: userChoseSpecialCharacters
  };
  return options;
}

function createRandom(length) {
  var randomNum = Math.floor(Math.random() * length);
  return randomNum;
}

function generatePassword() {
    var userChose = getPasswordCriteria();
    var availableChars = [];
    var passwordArr = [];

    if(userChose.userChoseNumbers) {
      availableChars = availableChars.concat(numbers);
    } 

    if(userChose.userChoseUpperCase) {
      availableChars = availableChars.concat(upperCase);
    } 

    if(userChose.userChoseLowerCase) {
      availableChars = availableChars.concat(lowerCase);
    } 

    if(userChose.userChoseSpecialCharacters) {
      availableChars = availableChars.concat(specialCharacters);
    } 

    for(var i = 0; i < 12; i++) {
      passwordArr.push(availableChars[createRandom(availableChars.length)])
    }


  return passwordArr.join("")
}

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