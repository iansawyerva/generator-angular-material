(function(app) {
    app.controller('<%= ControllerName %>', ['$scope', function($scope) {
        this.topDirections = ['left', 'up'];
        this.bottomDirections = ['down', 'right'];

        this.isOpen = false;

        this.availableModes = ['md-fling', 'md-scale'];
        this.selectedMode = 'md-fling';

        this.availableDirections = ['up', 'down', 'left', 'right'];
        this.selectedDirection = 'up';
    }]);
})(<%= AppName %>);
