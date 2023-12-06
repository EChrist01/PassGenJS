// Random Password Generator JS.

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
    console.log("You clicked Generate Password.");

    var passwordLenght = prompt("Length of password? NOTE: Must be between 8 and 128 characters!");
  if (isNaN(passwordLenght) || passwordLenght < 8 || passwordLenght > 128) {
    console.log("Invalid input. Please enter a number between 8 and 128 characters.");
    return;
  } else {
    passwordLenght = parseInt(passwordLenght);
  }

  var includeUppercase = confirm("Would you like to include capital letters?");
  var includeNumbers = confirm("Would you like to include numbers?");
  var includeSpecialChars = confirm("Would you like to include special characters?");

  var generatedPassword = generateRandomPassword(passwordLenght, includeUppercase, includeNumbers, includeSpecialChars);
  
  console.log("Generated password:", generatedPassword);

  const yourSecurePassword = document.getElementById("password");
  yourSecurePassword.textContent = generatedPassword;
}

function generateRandomPassword(length, includeUppercase, includeNumbers, includeSpecialChars) {
  
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "0123456789";
  var specialChars = "!@#$%^&*()-_=+{}[]~`?/><,.;:"

  var allChars = lowercaseChars;

  if (includeUppercase) {
    allChars += uppercaseChars;
  }

  if (includeNumbers) {
    allChars += numberChars;
  }

  if (includeSpecialChars) {
    allChars += specialChars;
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;
}

//1. prompt the user for password criteria 
  //2. password lenght needs to be between 8- 128 characters 
//3. lowercase, uppercase, numbers, special characters. 
  //4. validate input - boolean (t) or (f)
//5. display password to the page

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
// var stringVar = "1";
// var intVar = 1;
// var boolVar = true;
// var objVar = {
//   string: "1",
//   number: 1,
//   bool: false
// }
// let arrVar = [stringVar, intVar, boolVar, objVar];
// let arrVar2 = ["1", 1, true, {bucket1:"1",shovel:1,isCorrect:false}]

// console.log(stringVar);
// console.log("Object Console Longs")
// console.log(objVar);
// console.log(objVar.bool);
// console.log("Array Console Logs");
// console.log(arrVar);
// console.log(arrVar[3]);
// console.log("MISC");
// console.log(arrVar2);





