
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
gulp serve || sudo gulp serve
```

Run dist server - before running this for the first time run  ```gulp dist:package```


```bash
gulp dist:serve || sudo gulp dist:serve
```

Create dist package


```bash
gulp dist:package || sudo gulp dist:package
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

Generate a component:

```bash
yo angular-material:component componentName path/to/partial 
```

Each time you inject a component you must specify {{component}} where you would like it to be injected in your partial.

Some components will generate a {{component name}}-controller.js in a "public/js/controllers/components" directory.

You might need to restart gulp for the dependencies to be injected when using the component command. (fix in progress).

Component list - must use exact name
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



All JavaScript/CSS dependencies will be automatically injected into your dev/dist "index.html" in proper order when running the browsersync server.

All bower components come first. Use bower when installing any new modules and you won't have any issues. Just be sure to inject them in your app module!

Besides for editing the main "index.html" file in the "dev" directory, all edits should be contained within the "public", "scss", and "spec" directories.

@TODO 

	- dist gulp tasks

	- karma setup

	- Update to count for Windows directories

## License

MIT © [Google](https://github.com/iansawyerva)


[npm-image]: https://badge.fury.io/js/generator-angular-material.svg
[npm-url]: https://npmjs.org/package/generator-angular-material
[daviddm-image]: https://david-dm.org/iansawyerva/generator-angular-material.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/iansawyerva/generator-angular-material
