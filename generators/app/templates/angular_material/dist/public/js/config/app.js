var AngularMaterialExample = angular.module('AngularMaterialExample', ['ngMaterial', 'ngAnimate', 'ngMessages', 'ngAria', 'ui.router']);

AngularMaterialExample.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'partials/home-partial.html',
        controller: 'HomeController'
    })

    // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
    .state('components', {
        url: '/components',
        templateUrl: 'partials/components-partial.html',
        controller: 'ComponentsController'
    });

});
