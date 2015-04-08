define([
  'jquery',
  'backbone',
  'handlebars',
  'editLayoutView',
  'text!app/header/templates/header.handlebars'
], function($, Backbone, Handlebars, EditLayoutView, HeaderTemplate){

	var HeaderView = Backbone.View.extend({
		
		el: '#header',
		template: Handlebars.compile(HeaderTemplate),

		events: {
            'click a.config': 'toggleLayoutSettings'
        },

		initialize: function(){
			console.log('Render main navigation');
			this.render();
		},
		render: function(){
			this.$el.html(this.template());

			// Add layout settings region
            var editLayoutView = new EditLayoutView();
            this.$el.append(editLayoutView.el);

			return this;
		},
		toggleLayoutSettings: function(){
			this.$el.find('#settings').toggle();
        }
	});

  	return HeaderView;
  
});