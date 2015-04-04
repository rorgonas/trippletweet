// Dependencies
var Twitter = require('twitter');
var auth = require('../middlewares/auth.json');

var user = new Twitter({
		consumer_key: auth.TWITTER_CONSUMER_KEY,
		consumer_secret: auth.TWITTER_CONSUMER_SECRET,
		access_token_key: auth.TWITTER_ACCESS_TOKEN_KEY,
		access_token_secret: auth.TWITTER_ACCESS_TOKEN_SECRET
});

// Return user
module.exports = user;