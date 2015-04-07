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
			this.collection = [{user: "Foo", content: "I tweet it"}, {user: "Boo", content: "I like it"}];
		},
		render: function(){
			this.addAll();
		},
		addOne: function(model, index, collection){
			var itemView = new TweetItemView({model:model});
			this.$el.append(itemView.render().el);
		},
		addAll: function(){
			_.each(this.collection, this.addOne, this);
		}
	});

  	return TweetList;
  
});