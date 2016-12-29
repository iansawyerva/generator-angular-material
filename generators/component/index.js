'use strict';
const yeoman = require('yeoman-generator');
const fs = require('fs');
const partial_dir = './public/partials/';
const partials = [];
const components = ['autocomplete', 'card', 'checkbox', 'chips', 'content', 'dialog', 'fab-speed-dial', 'fab-toolbar', 'menu', 'menu-bar', 'nav-bar', 'select', 'sidenav', 'slider', 'tabs'];

var hasComponents = false;

fs.readdir(partial_dir, (err, files) => {
    files.forEach(file => {
        partials.push(file);
    });
});

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
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
                this.partial = this.fs.read('./public/partials/' + partials[i]);
                if (this.partial.search(re) >= 0) {
                    hasComponents = true;
                    if (this.fs.exists(this.templatePath('./' + components[x] + '.js'))) {
                        this.fs.copyTpl(
                                this.templatePath('./' + components[x] + '.js'),
                                this.destinationPath('./public/js/controllers/components/' + partials[i].replace('.html', '-') + this.controllerName + '-controller.js'), {
                                    AppName: this.appname,
                                    ControllerName: toTitleCase(partials[i].replace('.html', '-').replace(/-/g, ' ')).replace(/ /g, '') + toTitleCase(this.controllerName) + 'Controller'
                                }
                            ),
                            this.fs.copyTpl(
                                this.templatePath('./' + components[x] + '.html'),
                                this.destinationPath(this.templatePath('./tmp/' + components[x] + '.html')), {
                                    ControllerName: toTitleCase(partials[i].replace('.html', '-').replace(/-/g, ' ')).replace(/ /g, '') + toTitleCase(this.controllerName) + 'Controller'
                                }
                            );
                        this.component = this.fs.read(this.templatePath('./tmp/' + components[x] + '.html'));
                        this.partial = this.fs.read('./public/partials/' + partials[i]);
                        this.partial = this.partial.replace(re, this.component);
                        this.fs.write('./public/partials/' + partials[i], this.partial);
                        this.fs.delete(this.templatePath('./tmp/' + components[x] + '.html'));
                    } else {
                        this.partial = this.fs.read('./public/partials/' + partials[i]);
                        this.partial = this.partial.replace(re, this.component);
                        this.fs.write('./public/partials/' + partials[i], this.partial);
                    }
                }
            }
        }

    },

    install: function() {
        if (hasComponents) {
            this.log('The components have been injected!');
        } else {
            this.log('Are you sure you specified the components in your partial? eg. {{autocomplete}}');
        }
    }
};

module.exports = yeoman.extend(service);
