define([
  'jquery',
  'backbone',
  'handlebars',
  'tweetListView',
  'text!app/tweets/templates/tweetContainer.handlebars'
], function($, Backbone, Handlebars, TweetList, TweetContainerTemplate){

	var TweetContainer = Backbone.View.extend({
		
		id: 'tweetGroup',
		className: 'row',
		template: Handlebars.compile(TweetContainerTemplate),

		initialize: function(){
			console.log('Load tweet list');
			var context = { params: [{user: "AppDirect", group: 1}, {user: "techcrunch", group: 2}, {user: "AppDirect", group: 3}]};
			this.groups = _.pluck(context.params, 'group');

			this.$el.html(this.template(context));

			this.render();
		},
		render: function(){
			var self = this;
			var groups = this.groups;

			for(var i = 0; i < groups.length; i++){
				var group = groups[i];

				var tweetList = new TweetList();
				tweetList.render();
   				self.$el.find('.group-' + group + ' section').html(tweetList.el);
			};				

			return this;
		}
	});

  	return TweetContainer;
  
});