const isAuth = require("../../middleware/isAuth")
module.exports = (app) => {
    app.post('/accueil/newTweet', isAuth, (req, res) => {
        let controllerTweet = require('../../controller/Tweet')
        let tweet = new controllerTweet(req, res).create()
    })
}