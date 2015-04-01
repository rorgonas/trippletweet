var Twitter = require('twitter');
var process = require('./config.js').getVariables();

var client = new Twitter({
		consumer_key: process.TWITTER_CONSUMER_KEY,
		consumer_secret: process.TWITTER_CONSUMER_SECRET,
		access_token_key: process.TWITTER_ACCESS_TOKEN_KEY,
		access_token_secret: process.TWITTER_ACCESS_TOKEN_SECRET,
});

client.get('search/tweets', {q: '@AppDirect', count: 1}, function(error, tweets, response){
   console.log(tweets);
});