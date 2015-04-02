var Twitter = require('twitter');
var profile = require('./profile.json');

var client = new Twitter({
		consumer_key: profile.TWITTER_CONSUMER_KEY,
		consumer_secret: profile.TWITTER_CONSUMER_SECRET,
		access_token_key: profile.TWITTER_ACCESS_TOKEN_KEY,
		access_token_secret: profile.TWITTER_ACCESS_TOKEN_SECRET
});

client.get('search/tweets', {q: '@AppDirect', count: 1}, function(error, tweets, response){
   console.log(tweets);
});