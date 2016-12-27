(function(app) {
	app.directive('<%= DirectiveName %>', ['', function() {
		return {
			link: function($scope, elem, attrs, controller) {

			}
		};
	}]);
})(<%= AppName %>);
