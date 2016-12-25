'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var util = require('util');

var AngularMaterial = yeoman.extend({

    prompting: function() {
        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to ' + chalk.red('Angular Material')
        ));

        return this.prompt([{
            type: 'input',
            name: 'name',
            message: 'What would you like to name your app? Default: ' + this.appname,
            default: this.appname
        }]).then((answers) => {
            if (this.appname != answers.name) {
                this.appname = answers.name
            }
            this.log('Selected app name: ', answers.name);
        });
    },

    writing: function() {
        this.fs.copy(
            this.templatePath('./angular_material'),
            this.destinationPath(this.appname)
        );
    },

    install: function() {
        var npmdir = process.cwd() + '/' + this.appname;

        process.chdir(npmdir);

        this.installDependencies({
            bower: true,
            npm: true
        });
    },

    end: function() {
        this.log(this.appname + ' has been created!');
    }
});

module.exports = AngularMaterial;