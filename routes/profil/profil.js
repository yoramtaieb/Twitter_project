const isAuth = require("../../middleware/isAuth");

module.exports = (app) => {
    app.get("/profil", isAuth, (req, res) => {
        const tweet = require('../../controller/Tweet')
        new tweet(req, res, './profil/profil').findTweetsByIdTest()
    });

};