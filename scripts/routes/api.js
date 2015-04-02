// Dependencies
var express = require('express');
var client = require('../client');
var router = express.Router();

// Routes
router.get('/tweets', function(req, res){

	client.get('search/tweets', {q: '@AppDirect', count: 1}, function(error, tweets, response){
	  	if (!error) {
	  		res.send(tweets);
	  	}

	  	res.send('There was an error');
	});
});

// Return router
module.exports = router;