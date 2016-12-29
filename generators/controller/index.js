'use strict';
var yeoman = require('yeoman-generator');

var controller = yeoman.extend({

    writing: function(args) {
        this.appname = process.cwd().match(/([^\/]*)\/*$/)[1];
        if (!args) {
            this.controllerName = this.appname.replace(/ /g, '');
        } else {
            this.controllerName = args.replace(/ /g, '');
        }
        this.fs.copyTpl(
            this.templatePath('./controller.js'),
            this.destinationPath('./public/js/controllers/' + this.controllerName + '-controller.js'), {
                AppName: this.appname,
                ControllerName: this.controllerName + 'Controller'
            }
        );
    },

    install: function() {
        this.log(this.controllerName + ' has been created!');
    }
});

module.exports = controller;
