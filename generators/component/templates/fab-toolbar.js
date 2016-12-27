(function() {
    <%= AppName %>.controller('<%= ControllerName %>', <%= ControllerName %>);

    function <%= ControllerName %> ($scope) {
        $scope.isOpen = false;

        $scope.demo = {
            isOpen: false,
            count: 0,
            selectedDirection: 'left'
        };
    }
})();
