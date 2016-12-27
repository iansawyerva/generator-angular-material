'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var util = require('util');

var decorator = yeoman.extend({

    writing: function(args) {
        this.appname = process.cwd().match(/([^\/]*)\/*$/)[1];
        if (!args) {
            this.decoratorName = this.appname.replace(/ /g, '');
        } else {
            this.decoratorName = args.replace(/ /g, '');
        }
        this.fs.copyTpl(
            this.templatePath('./decorator.js'),
            this.destinationPath('./public/js/decorators/' + this.decoratorName + '-decorator.js'), {
                AppName: this.appname,
                DecoratorName: this.decoratorName + 'Decorator'
            }
        );
    },

    install: function() {
        this.log(this.decoratorName + ' has been created!');
    }
});

module.exports = decorator;
