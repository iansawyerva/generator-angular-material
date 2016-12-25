'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var util = require('util');

var factory = yeoman.extend({

    writing: function(args) {
        if (!args) {
            this.factoryName = this.appname + '-factory.js'
        } else {
            this.factoryName = args + '-factory.js'
        }
        this.fs.copy(
            this.templatePath('./factory.js'),
            this.destinationPath(this.appname + '/app/js/factorys/' + this.factoryName)
        );
    },

    install: function() {
        this.log(this.factoryName + ' has been created!');
    }
});

module.exports = factory;
