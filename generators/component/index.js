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
                type: 'list',
                name: 'flavour',
                message: 'Which component would you like to inject?',
                choices: components,
                default: 0,
                pageSize: 15
            }]).then((component) => {
                service.component = component.flavour;
            });
        });
    },
    writing: function() {
        this.appname = process.cwd().match(/([^\/]*)\/*$/)[1];
        this.controllerName = service.component.replace(/ /g, '');
        this.controllerName = this.controllerName.replace(/-/g, '');
        for (var i = 0; i < service.partials.length; i++) {
            if (this.fs.exists(this.templatePath('./' + service.component + '.js'))) {
                this.fs.copyTpl(
                        this.templatePath('./' + service.component + '.js'),
                        this.destinationPath('./public/js/controllers/components/' + this.controllerName + '-controller.js'), {
                            AppName: this.appname,
                            ControllerName: this.controllerName + 'Controller'
                        }
                    ),
                    this.fs.copyTpl(
                        this.templatePath('./' + service.component + '.html'),
                        this.destinationPath(this.templatePath('./tmp/' + service.component + '.html')), {
                            ControllerName: this.controllerName + 'Controller'
                        }
                    );
                this.component = this.fs.read(this.templatePath('./tmp/' + service.component + '.html'));
                this.partial = this.fs.read(service.partials[i]);
                this.partial = this.partial.replace('{{component}}', this.component)
                this.fs.write(service.partials[i], this.partial);
                this.fs.delete(this.templatePath('./tmp/' + service.component + '.html'));
            } else {
                this.component = this.fs.read(this.templatePath('./' + service.component + '.html'));
                this.partial = this.fs.read(service.partials[i]);
                this.partial = this.partial.replace('{{component}}', this.component)
                this.fs.write(service.partials[i], this.partial);
            }
        }

    },

    install: function() {
        for (var i = 0; i < service.partials.length; i++) {
            this.log(service.component + ' component has been injected into ' + service.partials[i] + '!');
        }
    }
};

module.exports = yeoman.extend(service);
