const connexion = require('../config/ConnexionDB')
const moment = require('../config/moment.js')

class Tweet {

    constructor(row) {
        this.row = row
    }

    get tweet() {
        return this.row.tweet
    }

    get created_at() {
        return moment(this.row.created_at)
    }

    get first_name() {
        return this.row.first_name
    }

    get last_name() {
        return this.row.last_name
    }

    create(id_user, tweet) {
        connexion.query("INSERT INTO tweets (id_user, tweet, created_at) VALUES (?, ?, ?)", [id_user, tweet, new Date()])
    }

    all(callback) {
        connexion.query('SELECT * FROM tweets LEFT JOIN user ON tweets.id_user = user.id ORDER BY created_at DESC', (err, results) => {
            if (err) throw err;
            callback(results.map((row) => new Tweet(row)))
        })
    }

    findTweetsByIdUser(id, cb) {
        connexion.query('SELECT * FROM tweets WHERE id_user = ? ORDER BY created_at DESC', [id], (err, results) => {
            if (err) throw err;
            cb(results.map((row) => new Tweet(row)))
        })
    }
}

module.exports = Tweet