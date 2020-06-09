//requires
require('dotenv').config()
let express = require("express");
const flash = require("connect-flash");
let app = express();
let bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const router = express.Router();

//moteur tp
app.set("view engine", "ejs");

app.use(
    session({
        secret: "secret",
        cookie: { maxAge: 6000000 },
        resave: true,
        saveUninitialized: true,
    })
);

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use("/public", express.static("public"));

// Middleware
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

require("./routes/router")(app);

// Ecoute du port
app.listen("8000", (err) => {
    console.log("serveur pret au port 8000");
});