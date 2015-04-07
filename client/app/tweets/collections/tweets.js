define([
	'backbone', 
	'../models/tweet'
], function(Backbone, Tweet){

	var Tweets = Backbone.Collection.extend({
		//url: 'rest/api/tweet',
		initialize: function(options){
			this.options = options;
		},
		url: function(){
			return '/api/tweets/' + this.options.query;
		},
		model: Tweet,
		parse: function(response, options){
			return response.statuses;
		}
	});

	return Tweets
});