define([
  'jquery',
  'backbone',
  'handlebars',
  'text!app/settings/templates/editLayout.handlebars'
], function($, Backbone, Handlebars, EditLayoutTemplate){

	var EditLayoutView = Backbone.View.extend({
		
		el: '#settings',
		template: Handlebars.compile(EditLayoutTemplate),

		events: {
            'click button.edit': 'editSettings',
            'click button.save': 'saveSettings'
        },

		initialize: function(){
			console.log('Render aside panel for Layout Settings');
			this.render();
		},
		render: function(){
			this.$el.html(this.template());
			return this;
		},
		editSettings: function(e){
			// enter in edit mode. read from model/localstorage
			console.log('Layout Settings:edit');
		},
		saveSettings: function(e){
			// save changes into model/localstorage
			console.log('Layout Settings:save');
		}
	});

  	return EditLayoutView;
  
});