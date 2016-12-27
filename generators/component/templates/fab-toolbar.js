(function(app) {
    app.controller('<%= ControllerName %>', ['$scope', function($scope) {
        $scope.isOpen = false;

        $scope.demo = {
            isOpen: false,
            count: 0,
            selectedDirection: 'left'
        };
    }]);
})(<%= AppName %>);
