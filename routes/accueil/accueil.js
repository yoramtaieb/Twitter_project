module.exports = (app) => {
    const isAuth = require("../../middleware/isAuth");

    app.get("/accueil", isAuth, (req, res) => {
        const tweet = require('../../controller/Tweet')
        new tweet(req, res).all()
    });

};