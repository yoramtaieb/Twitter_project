const passport = require('../../config/passport')();

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render("Aut/Aut", { error: req.flash('error'), title: 'Connexion' })
    })

    app.post("/connexion/submit", passport.authenticate("local", {
        successRedirect: '/accueil',
        failureRedirect: "/",
        failureFlash: "Le nom d'utilisateur et le mot de passe que vous avez saisis ne correspondent pas à nos enregistrements. Veuillez revérifier et réessayer."
    }))

    app.get('/logout', (req, res) => {
        req.logout()
        res.redirect("/");
    })


    app.post('/inscription/submit', (request, response) => {
        const insc = require('../../controller/Inscription.js')
        new insc(request, response)
    })
}