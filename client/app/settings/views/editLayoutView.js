define([
  'jquery',
  'backbone',
  'handlebars',
  'text!app/settings/templates/editLayout.handlebars'
], function($, Backbone, Handlebars, EditLayoutTemplate){

	var EditLayoutView = Backbone.View.extend({
		
		el: '#settings',
		template: Handlebars.compile(EditLayoutTemplate),

		initialize: function(){
			console.log('Render aside panel for Layout Settings');
			this.render();
		},
		render: function(){
			//var attributes = this.model.attributes;
			this.$el.html(this.template());
			return this;
		} 
	});

  	return EditLayoutView;
  
});