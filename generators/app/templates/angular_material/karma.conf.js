module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      { pattern: 'bower_components/angular/angular.min.js', watched: false, included: true},
      { pattern: 'bower_components/**/*.min.js', watched: false, included: true},
      { pattern: 'public/js/config/app.js', watched: true},
      { pattern: 'public/js/factories/**/*.js', watched: true},
      { pattern: 'public/js/services/**/*.js', watched: true},
      { pattern: 'public/js/controllers/**/*.js', watched: true},
      { pattern: 'public/js/directives/**/*.js', watched: true},
      { pattern: 'public/js/decorators/**/*.js', watched: true},
      { pattern: 'spec/**/*.spec.js', watched: true},
      { pattern: 'spec/json/**/*.json', watched: true, included: false},
    ],
    browsers: ['PhantomJS']
  });
};