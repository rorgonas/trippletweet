define([
    'jquery',
	'backbone',
    'headerView',
	'searchCollectionView',
    'sortable'
], function($, Backbone, HeaderView, SearchView, Sortable){
    
    var App = Backbone.View.extend({
        
        el: "#container",
        
        initialize: function(){
            console.log('Load main content');
            this.render();           	
        },
        render: function(){

            // Add navigation region
            var headerView = new HeaderView();
            this.$el.find('#header').append(headerView.el);

            // Add tweet columns region
            var searchView = new SearchView();
            this.$el.find('#tweets').append(searchView.el);    

            var sortable = Sortable.create(tweetGroup, {animation: 150});
        }
    });

    return App;
});