// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p','q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper = ['A','B','C','D','E','F','G','H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X','Y','Z'];
var special = [';', '!','$', '#', '%', '*', '^'];
var userChoiceArray=[];


// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var userChoice = window.prompt('How many characters would you like your password to have? (8-128)')
  var lowerCaseChoice = confirm('Would you like lowercase letters in your password?')
  var upperChoice = confirm('Would you like Uppercase letters in your password?')
  var specialChoice = confirm('Would you like special characters in your password?') 
  if(userChoice){
    console.log(userChoice)
  } else if(!userChoice){
    return
  }
  
  if(lowerCaseChoice === true){
    userChoiceArray = userChoiceArray.concat(lowerCase)
  }
  if(upperChoice === true){
    userChoiceArray = userChoiceArray.concat(upper)
    
  }
  if(specialChoice === true){
    userChoiceArray = userChoiceArray.concat(special)
  } 
  var password = []
  for(var i = 0; i < userChoice; i++){
    var randomIndex = Math.floor(Math.random() * userChoiceArray.length) 
    var randomCharacter = userChoiceArray[randomIndex]
    password.push(randomCharacter)
  }
  
  passwordText.value = password.join("");
  console.log(userChoiceArray)
};
//take new array, loop with chosen number, and push input to text

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
