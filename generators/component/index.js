'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var util = require('util');

var service = yeoman.extend({

    writing: function(arg1, arg2) {
        this.component = this.fs.read(this.templatePath(arg1 + '.html'));
        this.partial = this.fs.read(arg2);
        this.partial = this.partial.replace('{{component}}', this.component)
        this.fs.write(arg2, this.partial);
    },

    install: function(arg1, arg2) {
        this.log(arg1 + ' component has been injected into ' + arg2 + '!');
    }
});

module.exports = service;
