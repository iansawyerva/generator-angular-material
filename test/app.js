'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-angular-material:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({name: true})
      .toPromise();
  });

  it('creates files', function () {
    console.log(true)
  });
});
