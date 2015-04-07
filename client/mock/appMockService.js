define([
	'text!app/tweets/tests/JSON/tweetJSON.js'
], function(TweetJSON){

	// Simple tweet list
	$.mockjax({
		url: 'rest/api/tweet',
		responseTime: 750,
		dataType: 'json',
		contentType: 'application/json',
		responseText: TweetJSON,
		type: 'GET',
		status: 200
	});

});