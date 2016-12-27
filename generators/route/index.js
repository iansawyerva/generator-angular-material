'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var util = require('util');

var service = yeoman.extend({

    writing: function(arg) {
        this.appname = process.cwd().match(/([^\/]*)\/*$/)[1];
        this.routeName = arg.replace(/ /g, '');
        this.routeName = this.routeName.replace(/-/g, '');
        this.routeName = this.routeName.toLowerCase();
        this.appjs = this.fs.read('./public/js/config/app.js');
        this.fs.copyTpl(
            this.templatePath('./route.js'),
            this.destinationPath(this.templatePath('./tmp/app.js')), {
                ControllerName: this.routeName + 'Controller',
                RouteName: this.routeName
            }
        ),
        this.fs.copyTpl(
            this.templatePath('./controller.js'),
            this.destinationPath('./public/js/controllers/' + this.routeName + '-controller.js'), {
                AppName: this.appname,
                ControllerName: this.routeName + 'Controller'
            }
        ),
        this.fs.copyTpl(
            this.templatePath('./partial.html'),
            this.destinationPath('./public/partials/' + this.routeName + '-partial.html'), {
                ControllerName: this.routeName + 'Controller',
                RouteName: this.routeName
            }
        );
        this.tmpappjs = this.fs.read(this.templatePath('./tmp/app.js'));
        this.appjs = this.appjs.replace('$stateProvider.state', '$stateProvider.state' + this.tmpappjs);
        this.fs.write('./public/js/config/app.js', this.appjs);
        this.fs.delete(this.templatePath('./tmp/app.js'));
    },

    install: function(arg) {
        this.routeName = arg.replace(/ /g, '');
        this.routeName = this.routeName.replace(/-/g, '');
        this.routeName = this.routeName.toLowerCase();
        this.log(this.routeName + ' has been created!');
    }
});

module.exports = service;
