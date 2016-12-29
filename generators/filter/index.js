'use strict';
var yeoman = require('yeoman-generator');

var filter = yeoman.extend({

    writing: function(args) {
        this.appname = process.cwd().match(/([^\/]*)\/*$/)[1];
        if (!args) {
            this.filterName = this.appname.replace(/ /g, '');
        } else {
            this.filterName = args.replace(/ /g, '');
        }
        this.fs.copyTpl(
            this.templatePath('./filter.js'),
            this.destinationPath('./public/js/filters/' + this.filterName + '-filter.js'), {
                AppName: this.appname,
                FilterName: this.filterName + 'Filter'
            }
        );
    },

    install: function() {
        this.log(this.filterName + ' has been created!');
    }
});

module.exports = filter;
