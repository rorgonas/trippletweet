define([
	'text!app/tweets/tests/JSON/tweetJSON.js',
	'text!app/tweets/tests/JSON/tweetsJSON.js'
], function(TweetJSON, TweetsJSON){

	// Simple tweet list
	$.mockjax({
		url: 'rest/api/tweet',
		responseTime: 750,
		dataType: 'json',
		contentType: 'application/json',
		responseText: TweetsJSON,
		type: 'GET',
		status: 200
	});

});