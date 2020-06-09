module.exports = (app) => {
    require("./Aut/Aut.js")(app);
    require("./accueil/accueil.js")(app);
    require("./tweet/tweet.js")(app);
    require("./profil/profil.js")(app);
    require("./messagerie/messagerie.js")(app);

    app.get('*', (req, res) => {
        res.status(404).render('testError/404', { title: 'Error 404' })
    })
};