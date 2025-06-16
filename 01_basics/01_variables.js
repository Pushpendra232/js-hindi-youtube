const accountID = 14455
let accountName = "John Doe"
var accountPassword = "password123"
accountCity = "New York" // This will create a global variable
let accountState; 

// accountID = 2  // note allowed

accountName = "Jhrehrh "
accountPassword = "newpassword456"
accountCity = "Los Angeles"

console.log(accountID);

/*
prefer not to use var, use let or const instead
const is used for constants, let is used for variables that can change
var is function scoped, let and const are block scoped
*/

console.table([accountName,accountID,accountPassword,accountCity,accountState]);