define([
  'jquery',
  'backbone',
  'handlebars',
  'text!app/tweets/templates/tweet.handlebars'
], function($, Backbone, Handlebars, tweetTemplate){

	var TweetItem = Backbone.View.extend({
		
		tagName: 'li',
		className: "tweet-item",
		template: Handlebars.compile(tweetTemplate),

		initialize: function(){
			console.log('Render single tweet');
		},
		render: function(){
			this.$el.html(this.template(this.model));
			return this;
		} 
	});

  	return TweetItem;
  
});