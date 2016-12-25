'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var util = require('util');

var controller = yeoman.extend({

    writing: function(args) {
        if (!args) {
            this.controllerName = 'example-controller.js'
        } else {
            this.controllerName = args + '-controller.js'
        }
        this.fs.copy(
            this.templatePath('./controller.js'),
            this.destinationPath('./app/js/controllers/' + this.controllerName)
        );
    },

    install: function() {
        this.log(this.controllerName + ' has been created!');
    }
});

module.exports = controller;
