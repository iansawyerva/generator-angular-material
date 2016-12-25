var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

gulp.task('default', ['serve']);

// Static Server + watching js/scss/html files
gulp.task('serve', ['sass', 'js', 'html'], function() {

    browserSync.init({
        server: {
            baseDir: "/",
            routes: {
                "/bower_components": "./bower_components",
                "/js": "./app/js",
                "/css": "./app/css",
                "/partials": "./app/partials"
            }
        }
    });

    /* If you use a proxy replace the previous code with the below script replacing "yourlocal.dev" with your local proxy
       
        browserSync.init({
            proxy: "yourlocal.dev"
        });

   */

    gulp.watch("./scss/*.scss", ['sass-watch']);

    gulp.watch("./app/**/*.html", ['html-watch']);

    gulp.watch("./app/js/**/*.js", ['js-watch']);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('html', function() {
    return gulp.src("./app/**/*.html")
        .pipe(sass())
        .pipe(gulp.dest("./app"))
        .pipe(gulp.dest("./dist"))
        .pipe(browserSync.stream());
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("scss/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./app/css"))
        .pipe(gulp.dest("./dist/css"))
        .pipe(browserSync.stream());
});

// process JS files and return the stream.
gulp.task('js', function() {
    return gulp.src('./app/js/**/*js')
        .pipe(concat('concat.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

// process JS files and return the stream.
gulp.task('vendor-js', function() {
    return gulp.src('./bower_components/**/*js')
        .pipe(browserify())
        .pipe(gulp.dest('./app/js/vendor'))
        .pipe(gulp.dest('./dist/js/vendor'));
});

gulp.task('html-watch', ['html'], function(done) {
    browserSync.reload();
    done();
});

gulp.task('sass-watch', ['sass'], function(done) {
    browserSync.reload();
    done();
});

gulp.task('js-watch', ['js'], function(done) {
    browserSync.reload();
    done();
});
