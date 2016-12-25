'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var util = require('util');

var directive = yeoman.extend({

    writing: function(args) {
        if (!args) {
            this.directiveName = 'example-directive.js'
        } else {
            this.directiveName = args + '-directive.js'
        }
        this.fs.copy(
            this.templatePath('./directive.js'),
            this.destinationPath('./app/js/directives/' + this.directiveName)
        );
    },

    install: function() {
        this.log(this.directiveName + ' has been created!');
    }
});

module.exports = directive;
