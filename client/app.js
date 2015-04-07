define([
    'jquery',
	'backbone',
	'tweetContainerView',
    'sortable'
], function($, Backbone, TweetContainer, Sortable){
    
    var App = Backbone.View.extend({
        
        el: "#tweets",

        initialize: function(){
            console.log('Load main content');
            this.render();           	
        },
        render: function(){
            var tweetContainer = new TweetContainer();
            tweetContainer.render();
            this.$el.html(tweetContainer.el);

            var sortable = Sortable.create(tweetGroup, {animation: 150});
        }
    });

    return App;
});