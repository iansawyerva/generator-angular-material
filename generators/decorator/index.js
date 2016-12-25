'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var util = require('util');

var decorator = yeoman.extend({

    writing: function(args) {
        if (!args) {
            this.decoratorName = this.appname + '-decorator.js'
        } else {
            this.decoratorName = args + '-decorator.js'
        }
        this.fs.copy(
            this.templatePath('./decorator.js'),
            this.destinationPath(this.appname + '/app/js/decorators/' + this.decoratorName)
        );
    },

    install: function() {
        this.log(this.decoratorName + ' has been created!');
    }
});

module.exports = decorator;
