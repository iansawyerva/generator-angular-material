'use strict';
var yeoman = require('yeoman-generator');

var service = yeoman.extend({

    writing: function(args) {
        this.appname = process.cwd().match(/([^\/]*)\/*$/)[1];
        if (!args) {
            this.serviceName = this.appname.replace(/ /g, '');
        } else {
            this.serviceName = args.replace(/ /g, '');
        }
        this.fs.copyTpl(
            this.templatePath('./service.js'),
            this.destinationPath('./public/js/services/' + this.serviceName + '-service.js'), {
                AppName: this.appname,
                ServiceName: this.serviceName + 'Service'
            }
        );
    },

    install: function() {
        this.log(this.serviceName + ' has been created!');
    }
});

module.exports = service;
