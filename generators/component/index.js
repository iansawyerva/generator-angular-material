'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var util = require('util');

var service = yeoman.extend({

    writing: function(arg1, arg2) {
        this.appname = process.cwd().match(/([^\/]*)\/*$/)[1];
        this.controllerName = arg1.replace(/ /g, '');
        this.controllerName = this.controllerName.replace(/-/g, '');
        if (this.fs.exists(this.templatePath('./' + arg1 + '.js'))) {
            this.fs.copyTpl(
                    this.templatePath('./' + arg1 + '.js'),
                    this.destinationPath('./public/js/controllers/components/' + this.controllerName + '-controller.js'), {
                        AppName: this.appname,
                        ControllerName: this.controllerName + 'Controller'
                    }
                ),
                this.fs.copyTpl(
                    this.templatePath('./' + arg1 + '.html'),
                    this.destinationPath(this.templatePath('./tmp/' + arg1 + '.html')), {
                        ControllerName: this.controllerName + 'Controller'
                    }
                );
            this.component = this.fs.read(this.templatePath('./tmp/' + arg1 + '.html'));
            this.partial = this.fs.read(arg2);
            this.partial = this.partial.replace('{{component}}', this.component)
            this.fs.write(arg2, this.partial);
            this.fs.delete(this.templatePath('./tmp/' + arg1 + '.html'));
        } else {
            this.component = this.fs.read(this.templatePath('./' + arg1 + '.html'));
            this.partial = this.fs.read(arg2);
            this.partial = this.partial.replace('{{component}}', this.component)
            this.fs.write(arg2, this.partial);
        }
    },

    install: function(arg1, arg2) {
        this.log(arg1 + ' component has been injected into ' + arg2 + '!');
    }
});

module.exports = service;
