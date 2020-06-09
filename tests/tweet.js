let userModel = require("../Models/User.js")

let testUser = new userModel()

testUser.findUserByMail('a@a.com', (err, user) => {
    user[0]
})