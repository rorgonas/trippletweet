define([
  'jquery',
  'backbone',
  'handlebars',
  'tweetListView',
  'text!app/search/templates/searchForms.handlebars',
  'app/tweets/collections/tweets'
], function($, Backbone, Handlebars, TweetList, SearchForms, Tweets){

	var TweetContainer = Backbone.View.extend({
		
		id: 'tweetGroup',
		className: 'row',
		template: Handlebars.compile(SearchForms),

		initialize: function(){
			console.log('Load tweet list');
			this.context = { params: [
				{ search: "@AppDirect", column: 0 }, 
				{ search: "@laughingsquid", column: 1 }, 
				{ search: "@techcrunch", column: 2 }
			]};
			this.$el.html(this.template(this.context));
			this.render();
		},
		render: function(){
			var self = this;
			var columns = _.pluck(this.context.params, 'column');
			var params = _.pluck(this.context.params, 'search');

			_.each(this.context.params, function(value, key, list){ 

				// Fetch data
				var query = value.search;
				var collection = new Tweets({query: query});
				collection.fetch({async:false});

				// Render list
				var tweetList = new TweetList({collection: collection});
				tweetList.render();

   				self.$el.find('.group-' + value.column + ' section').html(tweetList.el);
			});
			
			

			return this;
		}
	});

  	return TweetContainer;
  
});