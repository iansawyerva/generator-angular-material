'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var util = require('util');

var factory = yeoman.extend({

    writing: function(args) {
        this.appname = process.cwd().match(/([^\/]*)\/*$/)[1];
        if (!args) {
            this.factoryName = this.appname.replace(/ /g, '');
        } else {
            this.factoryName = args.replace(/ /g, '');
        }
        this.fs.copyTpl(
            this.templatePath('./factory.js'),
            this.destinationPath('./public/js/factories/' + this.factoryName + '-factory.js'), {
                AppName: this.appname,
                FactoryName: this.factoryName + 'Factory'
            }
        );
    },

    install: function() {
        this.log(this.factoryName + ' has been created!');
    }
});

module.exports = factory;
