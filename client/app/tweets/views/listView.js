define([
  'jquery',
  'backbone',
  'handlebars',
  'tweetItemView'
], function($, Backbone, Handlebars, TweetItemView){

	var TweetList = Backbone.View.extend({
		
		tagName: 'ul',
		className: "tweet-list",
		
		initialize: function(){
			console.log('Render multiple tweets');
		},
		render: function(){
			this.addAll();
		},
		addOne: function(model){
			var itemView = new TweetItemView({model:model});
			this.$el.append(itemView.render().el);
		},
		addAll: function(){
			this.collection.each(this.addOne, this);
		}
	});

  	return TweetList;
  
});