<%= AppName %>.directive('<%= DirectiveName %>', ['', function(){
	return {
		scope: {},
		controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel',
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		link: function($scope, elem, attrs, controller) {
		}
	};
}]);