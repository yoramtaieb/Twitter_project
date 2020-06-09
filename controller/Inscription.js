class Inscription {
    constructor(request, response) {
        const User = require('../Models/User')
        new User().create(request.body.last_name, request.body.first_name, request.body.birthday, request.body.genre, request.body.city, request.body.mail, request.body.password)
        response.redirect('/')
    }
}

module.exports = Inscription