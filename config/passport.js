const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../Models/User.js");

module.exports = () => {
    //Setting the strategy for Passport
    passport.use(
        new LocalStrategy({ passReqToCallback: true }, function(req, mail, password, done) {
            let user = new User
            user.findUserByMail(mail, (err, user) => {
                user = user[0];
                var bcrypt = require('bcryptjs');
                if (err) {
                    console.log(err)
                    return done(err)
                }
                if (!user) {
                    console.log('pas de user')
                    return done(null, false)
                }

                //comparing user passwords - return if not a match   password !== user.password
                if (!bcrypt.compareSync(password, user.password)) {
                    console.log('password incorrect')
                    return done(null, false)
                }
                return done(null, user);
            });
        })
    );

    //These two methods are required to keep the user logged in via the session
    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        done(null, user);
    });
    //console.log(passport)
    return passport;
};