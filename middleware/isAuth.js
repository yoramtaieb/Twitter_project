module.exports = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        console.log('Pas co')
        res.redirect("/");
    }
};