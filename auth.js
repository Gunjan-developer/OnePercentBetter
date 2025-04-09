const jwt = require("jsonwebtoken");

const password = "SeeMe"; // this the secret 

const User1 = {
    name: "Alex",
    accountNum: "15233645889910",
    bankName: "State Bank of India"
};

// here we are creating the 1st Step that is :
// Generating 
// JWT
const token = jwt.sign(User1 , password);

// console.log("the generated token value is : ",token);

// the token has been generated using the respective password , and hence this token can ONLY be verified using the same password only !!
// let tokenLength = token.length;
// let tokenType = typeof token;

// console.log("The size is: "+tokenLength+" and the type is "+tokenType);

// Now it's time for verifying the things :
const tokenVerify = jwt.verify(token , password);

(tokenVerify) ? console.log("User is Authorized") : console.log("User is Not Authorized");

