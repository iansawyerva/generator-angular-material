<%= AppName %>.filter('<%= FilterName %>', function () {
	return function (input) {
    	return '<%= FilterName %> filter:' + input;
  	};
});