define(['backbone'], function(Backbone){

	var SearchForm = Backbone.Model.extend({
		defaults: {
			query: "",
			column: 0,
			count: 1
		}
	});

	return SearchForm
});