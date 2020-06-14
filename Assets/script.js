// Global variables
var length_def = 128;
var passwordcharset = "";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  window.alert("Your Random Password is:\n"+password)

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Random password generator
function generatePassword() {
  var length;
  var criteria = criteriaPassword();
  while(criteria[1] < 1){
    criteria = criteriaPassword();
  }
  length = criteria[0];
  console.log(passwordcharset);
  var generatedPassword = "";
  for (var i = 0, n = passwordcharset.length; i < length; ++i) {
    generatedPassword += passwordcharset.charAt(Math.floor(Math.random() * n));
  }
  return generatedPassword;
}

// User input for password length, default = 128
function lengthPassword(){
  var length = prompt("Enter Password Length", "128");
  length = parseInt(length);
  if(length > 128 || length < 8) {
    window.alert("Password length needs to be >= 8 and <=128\nDefaulting to 128");
    length = length_def;
  }
  return length;
}

// User input for lower-case alphabets 
function lowercasePassword(){
  var lowercase_enable;
  if(confirm("Include: Lowercase Alphabets ?")){
    lowercase_enable = 1;
    passwordcharset += "abcdefghijklmnopqrstuvwxyz"
  } else {
    lowercase_enable = 0
  }
  return lowercase_enable;
}

// User input for upper-case alphabets
function uppercasePassword(){
  var uppercase_enable;
  if(confirm("Include: Uppercase Alphabets ?")){
    uppercase_enable = 1;
    passwordcharset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  } else {
    uppercase_enable = 0
  }
  return uppercase_enable;
}

// User input for numbers
function numericPassword(){
  var numeric_enable;
  if(confirm("Include: Numbers ?")){
    numeric_enable = 1;
    passwordcharset += "0123456789"
  } else {
    numeric_enable = 0
  }
  return numeric_enable;
}

// User input for special characters
function specialcharPassword(){
  var specialchar_enable;
  if(confirm("Include: Special Characters ?")){
    specialchar_enable = 1;
    passwordcharset += "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\""
  } else {
    specialchar_enable = 0;
  }
  return specialchar_enable;
}

function criteriaPassword(){
  var length = lengthPassword();
  console.log(length);
  var lowercase = lowercasePassword();
  console.log(lowercase);
  var uppercase = uppercasePassword();
  console.log(uppercase);
  var numeric = numericPassword();
  console.log(numeric)
  var specialchar = specialcharPassword();
  console.log(specialchar);
  minimum_criteria = lowercase + uppercase + numeric + specialchar;
  console.log(minimum_criteria);
  return [length, minimum_criteria];
}
// User input for 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
