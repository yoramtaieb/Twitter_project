let userModel = require("../Models/User.js");

let testUser = new userModel();

console.log(testUser.hashingPassword("ppp"));