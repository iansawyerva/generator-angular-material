(function(app) {
	app.filter('<%= FilterName %>', function() {
		return function(input) {
			return '<%= FilterName %> filter:' + input;
		};
	});
})(<%= AppName %>);
