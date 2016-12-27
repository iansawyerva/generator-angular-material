
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

Run server


```bash
gulp serve
```

Run dist server


```bash
gulp serve:dist
```

Run test server


```bash
gulp serve:spec
```

Run tests


```bash
gulp spec
```

Create dist package


```bash
gulp dist:package
```

Generate a component:

```bash
yo angular-material:component
```

This will give you prompts for which partials you would like to inject into and what component you would like to inject.

Each time you inject a component you must specify {{component}} where you would like it to be injected in your partial.

Some components will generate a {{component name}}-controller.js in a "public/js/controllers/components" directory.

Example:

```
<div class="text-center md-padding">Home Page</div>
{{component}}
```

Component list
- autocomplete
- card
- checkbox
- chips
- content
- dialog
- fab-speed-dial
- fab-toolbar
- menu
- menu-bar
- nav-bar
- select
- sidenav
- slider
- tabs

Refer to https://material.angularjs.org/latest/ for how to use these components.

Generate a route:

```bash
yo angular-material:route routename
```

Each time you inject a route you must specify {{route}} where you would like the place it in public/js/config/app.js.

This will create ```public/js/controllers/routename-controller.js``` and ```public/partials/routename-partial.html``` files.

Example:

```
var MyApp = angular.module('MyApp', ['ngMaterial', 'ngAnimate', 'ngMessages', 'ngAria', 'ui.router']);

MyApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'partials/home-partial.html',
        controller: 'HomeController'
    })

	{{route}}

    .state('about', {
        url: '/about',
        templateUrl: 'partials/about-partial.html',
        controller: 'AboutController'
    });

}]);
```

Generate a controller:

```bash
yo angular-material:controller controllerName
```

Adds extension -controller.js to filename and Controller to controllerName

Generate a directive:

```bash
yo angular-material:directive directiveName
```

Adds extension -directive.js to filename and Directive to directiveName


Generate a verbose directive:

```bash
yo angular-material:verbose-directive directiveName
```

Adds extension -directive.js to filename and Directive to directiveName


Generate a factory:

```bash
yo angular-material:factory factoryName
```

Adds extension -factory.js to filename and Factory to factoryName


Generate a service:

```bash
yo angular-material:service serviceName 
```

Adds extension -service.js to filename and Service to serviceName

Generate a filter:

```bash
yo angular-material:filter filterName
```

Adds extension -filter.js to filename and Filter to filterName


All JavaScript/CSS dependencies will be automatically injected into your dev/dist "index.html" in proper order when running the browsersync server.

All bower components come first. Use bower when installing any new modules and you won't have any issues. Just be sure to inject them in your app module!

Besides for editing the main "index.html" file in the "dev" directory, all edits should be contained within the "public", "scss", and "spec" directories.

@TODO 

	- Update to count for Windows directories

## License

MIT © [Google](https://github.com/iansawyerva)


[npm-image]: https://badge.fury.io/js/generator-angular-material.svg
[npm-url]: https://npmjs.org/package/generator-angular-material
[daviddm-image]: https://david-dm.org/iansawyerva/generator-angular-material.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/iansawyerva/generator-angular-material
