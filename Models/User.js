const connexion = require('../config/ConnexionDB.js')
class User {

    create(first_name, last_name, birthday, sexe, city, mail, password) {
        password = this.hashingPassword(password)
        connexion.query(
            "INSERT INTO user (last_name, first_name, birthday, sexe, city,mail, password, is_actif) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [first_name, last_name, birthday, sexe, city, mail, password, true],
            (err, res) => {
                if (err) {
                    console.error(err)
                }
                return res
            }
        )
    }

    getUserById(idUser) {
        connexion.query(`SELECT first_name, last_name, birthday, sexe, city, mail FROM UserApp WHERE id_userApp = ${idUser}`, (err, res) => {
            if (!err) {
                return res
            }
        })
    }

    findUserByMail(mail, callback) {
        connexion.query("SELECT * FROM user WHERE ?", { mail: mail }, function(err, user) {
            callback(err, user);
        });
    }

    hashingPassword(password) {
        var bcrypt = require('bcryptjs')
        var salt = bcrypt.genSaltSync(12)
        var hash = bcrypt.hashSync(password, salt)

        return hash
    }

}

module.exports = User