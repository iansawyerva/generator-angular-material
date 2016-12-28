'use strict';
const yeoman = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const util = require('util');
const fs = require('fs');
const partial_dir = './public/partials/';
const partials = [];
const components = [{ name: 'autocomplete', value: 'autocomplete' }, { name: 'card', value: 'card' }, { name: 'checkbox', value: 'checkbox' }, { name: 'chips', value: 'chips' }, { name: 'content', value: 'content' }, { name: 'dialog', value: 'dialog' }, { name: 'fab-speed-dial', value: 'fab-speed-dial' }, { name: 'fab-toolbar', value: 'fab-toolbar' }, { name: 'menu', value: 'menu' }, { name: 'menu-bar', value: 'menu-bar' }, { name: 'nav-bar', value: 'nav-bar' }, { name: 'select', value: 'select' }, { name: 'sidenav', value: 'sidenav' }, { name: 'slider', value: 'slider' }, { name: 'tabs', value: 'tabs' }];

fs.readdir(partial_dir, (err, files) => {
    files.forEach(file => {
        partials.push({ name: file, value: file });
    });
});
var service = {
    prompting: function() {
        return this.prompt([{
            type: 'checkbox',
            name: 'flavour',
            message: 'Which partials would you like to inject into?',
            choices: partials,
            default: 0
        }]).then((partials) => {
            service.partials = [];
            for (var i = 0; i < partials.flavour.length; i++) {
                service.partials.push('./public/partials/' + partials.flavour[i]);
            }
            return this.prompt([{
                type: 'checkbox',
                name: 'flavour',
                message: 'Which components would you like to inject?',
                choices: components,
                default: 0,
                pageSize: 15
            }]).then((components) => {
                service.components = components.flavour;
            });
        });
    },
    writing: function() {
        this.appname = process.cwd().match(/([^\/]*)\/*$/)[1];
        for (var i = 0; i < service.partials.length; i++) {
            for (var x = 0; x < service.components.length; x++) {
                this.controllerName = service.components[x].replace(/ /g, '');
                this.controllerName = this.controllerName.replace(/-/g, '');
                var component = '{{' + service.components[x] + '}}';
                var re = new RegExp(component, "g");
                if (this.fs.exists(this.templatePath('./' + service.components[x] + '.js'))) {
                    this.fs.copyTpl(
                            this.templatePath('./' + service.components[x] + '.js'),
                            this.destinationPath('./public/js/controllers/components/' + this.controllerName + '-controller.js'), {
                                AppName: this.appname,
                                ControllerName: this.controllerName + 'Controller'
                            }
                        ),
                        this.fs.copyTpl(
                            this.templatePath('./' + service.components[x] + '.html'),
                            this.destinationPath(this.templatePath('./tmp/' + service.components[x] + '.html')), {
                                ControllerName: this.controllerName + 'Controller'
                            }
                        );
                    this.component = this.fs.read(this.templatePath('./tmp/' + service.components[x] + '.html'));
                    this.partial = this.fs.read(service.partials[i]);
                    this.partial = this.partial.replace(re, this.component)
                    this.fs.write(service.partials[i], this.partial);
                    this.fs.delete(this.templatePath('./tmp/' + service.components[x] + '.html'));
                } else {
                    this.component = this.fs.read(this.templatePath('./' + service.components[x] + '.html'));
                    this.partial = this.fs.read(service.partials[i]);
                    this.partial = this.partial.replace(re, this.component)
                    this.fs.write(service.partials[i], this.partial);
                }
            }
        }

    },

    install: function() {
        this.log('The components have been injected!');
    }
};

module.exports = yeoman.extend(service);
