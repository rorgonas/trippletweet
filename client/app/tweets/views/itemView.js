define([
  'jquery',
  'backbone',
  'handlebars',
  'moment-twitter',
  'text!app/tweets/templates/tweet.handlebars'
], function($, Backbone, Handlebars, Moment, tweetTemplate){

	var TweetItem = Backbone.View.extend({
		
		tagName: 'li',
		className: "tweet-item",
		template: Handlebars.compile(tweetTemplate),

		initialize: function(){
			console.log('Render single tweet');
		},
		render: function(){
			var attributes = this.model.attributes;
			this.dateTransform();
			
			this.$el.html(this.template(attributes));
			return this;
		},
		twitterDate: function(date){
			return moment(date).twitter();
		},
		simpleDate: function(date){
			return moment(date).format('LL');
		},
		dateTransform: function(){
			var time = this.simpleDate(this.model.get('created_at'));
			var twitterDate = this.twitterDate(this.model.get('created_at'));
			
			this.model.set('created_at', twitterDate);
			this.model.set('time', time);
		}

	});

  	return TweetItem;
  
});