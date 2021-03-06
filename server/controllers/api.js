// Dependencies
var express = require('express');
var router = express.Router();

// Routes
router.get('/tweets/:query', function(req, res){

	var	query = req.params.query, //'@AppDirect'
		count = 30;

	var user = require('../middlewares/user');
	
	user.get('search/tweets', {q: query, count: count}, function(error, tweets, response){
	  	if (error) {
	  		res.send('Error dispalying tweets.');
	  	} else {
	  		res.send(tweets);
	  	}	
	});
});

// Return router
module.exports = router;