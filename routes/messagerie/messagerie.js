module.exports = (app) => {
    app.get("/messagerie", (req, res) => {
        res.render("./messagerie/messagerie", { title: 'Message' });
    });

};