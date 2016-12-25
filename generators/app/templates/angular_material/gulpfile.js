var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var inject = require('gulp-inject');

gulp.task('default', ['serve']);

// Static Server + watching js/scss/html files
gulp.task('serve', ['sass', 'js', 'html', 'bower'], function() {

    browserSync.init({
        server: {
            baseDir: "./dev"
        }
    });

    /* If you use a proxy replace the previous code with the below script replacing "yourlocal.dev" with your local proxy
       
        browserSync.init({
            proxy: "yourlocal.dev"
        });

   */

    gulp.watch("./scss/*.scss", ['sass-watch']);

    gulp.watch("./public/**/*.html", ['html-watch']);

    gulp.watch("./public/js/**/*.js", ['js-watch']);

    gulp.watch("./bower_components/**/*.js", ['bower']);
});

gulp.task('index', function() {
    var target = gulp.src('./dev/index.html');
    var sources = gulp.src(["./bower_components/**/*.js", "./public/js/config/app.js", "./public/js/factories/**/.js", "./public/js/services/**/.js", "./public/js/controllers/**/.js", "./public/js/directives/**/.js", "./public/js/decorators/**/.js", "./bower_components/**/*.css", "./public/css/**/*.css"], { read: false });

    return target.pipe(inject(sources))
        .pipe(gulp.dest('./dev'));
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('html', function() {
    return gulp.src("./public/**/*.html")
        .pipe(gulp.dest("./dev"))
        .pipe(gulp.dest("./dist"))
        .pipe(browserSync.stream());
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("scss/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./dev/public/css"))
        .pipe(gulp.dest("./dist/public/css"))
        .pipe(browserSync.stream());
});
// process JS files and return the stream.
gulp.task('js', function() {
    return gulp.src('./public/js/**/*.js')
        .pipe(gulp.dest('./dev/public/js'))
        .pipe(gulp.dest('./dist/public/js'));
});

// process JS files and return the stream.
gulp.task('uglify-js', function() {
    return gulp.src('./public/js/**/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/public/js'));
});


// process JS files and return the stream.
gulp.task('bower', ['index'], function() {
    return gulp.src(["./bower_components/**/*.min.js", "./bower_components/**/*.min.css"])
        .pipe(gulp.dest('./dev/bower_components'))
        .pipe(gulp.dest('./dist/bower_components'));
});

gulp.task('html-watch', ['html'], function(done) {
    browserSync.reload();
    done();
});

gulp.task('sass-watch', ['sass', 'index'], function(done) {
    browserSync.reload();
    done();
});

gulp.task('js-watch', ['js', 'index'], function(done) {
    browserSync.reload();
    done();
});
