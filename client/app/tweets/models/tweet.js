define(['backbone'], function(Backbone){

	var Tweet = Backbone.Model.extend({
		defaults: {
			created_at: "",
			text: ""
		}
	});

	return Tweet
});