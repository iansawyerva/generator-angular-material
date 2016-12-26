'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var util = require('util');

var directive = yeoman.extend({

    writing: function(args) {
        this.appname = process.cwd().match(/([^\/]*)\/*$/)[1];
        if (!args) {
            this.directiveName = this.appname.replace(/ /g, '');
        } else {
            this.directiveName = args.replace(/ /g, '');
        }
        this.fs.copyTpl(
            this.templatePath('./verbose-directive.js'),
            this.destinationPath('./public/js/directives/' + this.directiveName + '-directive.js'), {
                AppName: this.appname,
                DirectiveName: this.directiveName + 'Directive'
            }
        );
    },

    install: function() {
        this.log(this.directiveName + ' has been created!');
    }
});

module.exports = directive;
