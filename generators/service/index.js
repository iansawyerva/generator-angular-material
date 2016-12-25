'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var util = require('util');

var service = yeoman.extend({

    writing: function(args) {
        if (!args) {
            this.serviceName = this.appname + '-service.js'
        } else {
            this.serviceName = args + '-service.js'
        }
        this.fs.copy(
            this.templatePath('./service.js'),
            this.destinationPath(this.appname + '/app/js/services/' + this.serviceName)
        );
    },

    install: function() {
        this.log(this.serviceName + ' has been created!');
    }
});

module.exports = service;
