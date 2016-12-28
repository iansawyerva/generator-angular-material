'use strict';
const yeoman = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const util = require('util');
const fs = require('fs');
const partial_dir = './public/partials/';
const partials = [];
const components = ['autocomplete', 'card', 'checkbox', 'chips', 'content', 'dialog', 'fab-speed-dial', 'fab-toolbar', 'menu', 'menu-bar', 'nav-bar', 'select', 'sidenav', 'slider', 'tabs'];

fs.readdir(partial_dir, (err, files) => {
    files.forEach(file => {
        partials.push('./public/partials/' + file);
    });
});
var service = {
    writing: function() {
        this.appname = process.cwd().match(/([^\/]*)\/*$/)[1];
        for (var i = 0; i < partials.length; i++) {
            for (var x = 0; x < components.length; x++) {
                this.controllerName = components[x].replace(/ /g, '');
                this.controllerName = this.controllerName.replace(/-/g, '');
                var component = '{{' + components[x] + '}}';
                var re = new RegExp(component, "g");
                this.component = this.fs.read(this.templatePath('./' + components[x] + '.html'));
                this.partial = this.fs.read(partials[i]);
                if (this.partial.search(re) >= 0) {
                    if (this.fs.exists(this.templatePath('./' + components[x] + '.js'))) {
                        this.fs.copyTpl(
                                this.templatePath('./' + components[x] + '.js'),
                                this.destinationPath('./public/js/controllers/components/' + this.controllerName + '-controller.js'), {
                                    AppName: this.appname,
                                    ControllerName: this.controllerName + 'Controller'
                                }
                            ),
                            this.fs.copyTpl(
                                this.templatePath('./' + components[x] + '.html'),
                                this.destinationPath(this.templatePath('./tmp/' + components[x] + '.html')), {
                                    ControllerName: this.controllerName + 'Controller'
                                }
                            );
                        this.component = this.fs.read(this.templatePath('./tmp/' + components[x] + '.html'));
                        this.partial = this.fs.read(partials[i]);
                        this.partial = this.partial.replace(re, this.component);
                        this.fs.write(partials[i], this.partial);
                        this.fs.delete(this.templatePath('./tmp/' + components[x] + '.html'));
                    } else {
                        this.partial = this.fs.read(partials[i]);
                        this.partial = this.partial.replace(re, this.component);
                        this.fs.write(partials[i], this.partial);
                    }
                }
            }
        }

    },

    install: function() {
        this.log('The components have been injected!');
    }
};

module.exports = yeoman.extend(service);
