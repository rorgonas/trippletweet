define([
    'jquery',
	'backbone',
	'searchCollectionView',
    'sortable'
], function($, Backbone, SearchView, Sortable){
    
    var App = Backbone.View.extend({
        
        el: "#tweets",

        initialize: function(){
            console.log('Load main content');
            this.render();           	
        },
        render: function(){
            var searchView = new SearchView();
            this.$el.html(searchView.el);

            var sortable = Sortable.create(tweetGroup, {animation: 150});
        }
    });

    return App;
});