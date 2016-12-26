var <%= AppName %> = angular.module('AngularMaterialExample', ['ngMaterial', 'ngAnimate', 'ngMessages', 'ngAria', 'ui.router']);

<%= AppName %>.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'partials/home-partial.html',
        controller: 'HomeController'
    })

    // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
    .state('about', {
        url: '/about',
        templateUrl: 'partials/about-partial.html',
        controller: 'AboutController'
    });

});
