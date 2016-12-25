'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var util = require('util');

var verboseDirective = yeoman.extend({

    writing: function(args) {
        if (!args) {
            this.directiveName = 'example-verbose-directive.js'
        } else {
            this.directiveName = args + '-directive.js'
        }
        this.fs.copy(
            this.templatePath('./verbose-directive.js'),
            this.destinationPath('./app/js/directives/' + this.directiveName)
        );
    },

    install: function() {
        this.log(this.directiveName + ' has been created!');
    }
});

module.exports = verboseDirective;
