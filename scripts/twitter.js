var Twitter = require('twitter');
var config = require('./user.json');

var client = new Twitter({
		consumer_key: config.TWITTER_CONSUMER_KEY,
		consumer_secret: config.TWITTER_CONSUMER_SECRET,
		access_token_key: config.TWITTER_ACCESS_TOKEN_KEY,
		access_token_secret: config.TWITTER_ACCESS_TOKEN_SECRET
});

client.get('search/tweets', {q: '@AppDirect', count: 2}, function(error, tweets, response){
   console.log(tweets);
});