
> Google&#39;s Angular Material - in progress

## Installation

First, install [Yeoman](http://yeoman.io) and generator-angular-material using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-angular-material
```

Then generate your new project:

```bash
yo angular-material appName
```

## Run server


```bash
gulp serve
```

- all JavaScript is generated anonymous besides for the angular.module declaration.

## Run dist server


```bash
gulp serve:dist
```

- compresses js/css
- all JavaScript is generated anonymous

Note: restart the dist server on any file creation

## Run test server


```bash
gulp serve:spec
```

## Run tests


```bash
gulp spec
```

## Create dist package

```bash
gulp dist:package
```

- compresses js/css
- all JavaScript is generated anonymous

Gulp tasks might require ```sudo``` depending on your permissions

For the below commands, if they create a new external dependency (new file), you will need to restart the server for changes to reflect properly.

## Generate a component:

```bash
yo angular-material:component
```

This will give you prompts for which partials you would like to inject into and what component you would like to inject.

Each time you inject a component you must specify {{component}} where you would like it to be injected in your partial.

- you can inject into multiple partials at the same time
- you can't inject different components at the same time

Some components will generate a {{component name}}-controller.js in a "public/js/controllers/components" directory.

Example:

```
<div class="text-center md-padding">Home Page</div>
{{component}}
```

<strong>Component list</strong>

SR = server restart required

- autocomplete - SR
- card
- checkbox
- chips - SR
- content
- dialog - SR
- fab-speed-dial - SR
- fab-toolbar - SR
- menu - SR
- menu-bar
- nav-bar
- select - SR
- sidenav - SR
- slider
- tabs

Refer to https://material.angularjs.org/latest/ for how to use these components.

## Generate a route:

```bash
yo angular-material:route routeName
```

This will create ```public/js/controllers/routename-controller.js``` and ```public/partials/routename-partial.html``` files.

Result:

- public/js/config/app.js

``` 
var appName = angular.module('appName', ['ngMaterial', 'ngAnimate', 'ngMessages', 'ngAria', 'ui.router']);

(function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('routename', {
            url: '/routename',
            templateUrl: 'partials/routename-partial.html',
            controller: 'routenameController'
        })

        .state('home', {
            url: '/',
            templateUrl: 'partials/home-partial.html',
            controller: 'HomeController'
        })

        .state('about', {
            url: '/about',
            templateUrl: 'partials/about-partial.html',
            controller: 'AboutController'
        });
    }]);
})(appName);

```

- public/js/controllers/routename-controller.js

```
(function(app) {
    app.controller('routenameController', ['$scope', function($scope) {
    
    }]);
})(appName);
```

- public/partials/routename-partial.html

```
<div ng-controller="routenameController">
    routename view
</div>
```


## Generate a controller:

```bash
yo angular-material:controller controllerName
```

Adds extension -controller.js to filename and Controller to controllerName


Result: public/js/controllers/controllerName-controller.js

```
(function(app) {
    app.controller('controllerNameController', ['$scope', function($scope) {

    }]);
})(appName);
```


## Generate a directive:

```bash
yo angular-material:directive directiveName
```

Adds extension -directive.js to filename and Directive to directiveName


Result: public/js/directives/directiveName-directive.js

```
(function(app) {
    app.directive('directiveNameDirective', ['', function() {
        return {
            link: function($scope, elem, attrs, controller) {

            }
        };
    }]);
})(appName);
```

## Generate a verbose directive:

```bash
yo angular-material:verbose-directive verboseDirectiveName
```

Adds extension -directive.js to filename and Directive to directiveName


Result: public/js/directives/verboseDirectiveName-directive.js

```
(function(app) {
    app.directive('verboseDirectiveNameDirective', ['', function() {
        return {
            scope: {},
            controller: function($scope, $element, $attrs, $transclude) {},
            // require: 'ngModel',
            // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            // templateUrl: '',
            // replace: true,
            // transclude: true,
            link: function($scope, elem, attrs, controller) {}
        };
    }]);
})(appName);
```

## Generate a factory:

```bash
yo angular-material:factory factoryName
```

Adds extension -factory.js to filename and Factory to factoryName

Result: public/js/factories/factoryName-factory.js

```
(function(app) {
    app.factory('factoryNameFactory', ['', function() {
        return {};
    }]);
})(appName);
```

## Generate a service:

```bash
yo angular-material:service serviceName 
```

Adds extension -service.js to filename and Service to serviceName

Result: public/js/services/serviceName-service.js
```
(function(app) {
    app.service('serviceNameService', ['', function() {

    }]);
})(appName);
```

## Generate a filter:

```bash
yo angular-material:filter filterName
```

Adds extension -filter.js to filename and Filter to filterName

Result: public/js/filters/filterName-filter.js
```
(function(app) {
    app.filter('filterNameFilter', function() {
        return function(input) {
            return 'filterNameFilter filter:' + input;
        };
    });
})(appName);
```


All JavaScript/CSS dependencies will be automatically injected into your dev/dist "index.html" in proper order when running the browsersync server.

All bower components come first. Use bower when installing any new modules and you won't have any issues. Just be sure to inject them in your app module!

Besides for editing the main "index.html" file in the "dev" directory, most edits should be contained within the "public", "scss", and "spec" directories.

@TODO 

- update to count for Windows directories
- make tmp directory to trigger server restarts

## License

MIT © [Google](https://github.com/iansawyerva)


[npm-image]: https://badge.fury.io/js/generator-angular-material.svg
[npm-url]: https://npmjs.org/package/generator-angular-material
[daviddm-image]: https://david-dm.org/iansawyerva/generator-angular-material.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/iansawyerva/generator-angular-material
