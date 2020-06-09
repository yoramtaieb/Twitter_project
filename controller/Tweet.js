const modelTweet = require('../Models/Tweet')

class Tweet {
    constructor(req, res, root = './accueil/accueil') {
        this.req = req
        this.res = res
        this.root = root
    }
    all() {
        let tweet = new modelTweet()
        tweet.all((tweets) => {
            this.res.render(this.root, { user: this.req.user, tweets: tweets, title: 'Acceuil' });
        })
    }

    findTweetsByIdTest() {
        let tweet = new modelTweet()
        tweet.findTweetsByIdUser(this.req.user.id, (tweets) => {
            this.res.render(this.root, { user: this.req.user, tweets: tweets, title: 'Profil' });
        })
    }

    create(){
        const modelTweet = require('../Models/Tweet')
        let tweet = new modelTweet()
        tweet.create(this.req.user.id, this.req.body.tweet)
        this.res.redirect('/accueil')
    }
}

module.exports = Tweet