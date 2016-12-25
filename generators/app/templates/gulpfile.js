var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('default', ['serve']);

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'js'], function() {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    /* If you use a proxy replace the previous code with the below script replacing "yourlocal.dev" with your local proxy
       
        browserSync.init({
            proxy: "yourlocal.dev"
        });

   */
    gulp.watch("./scss/*.scss", ['sass']).on('change', browserSync.reload);
    gulp.watch("./app/**/*.html").on('change', browserSync.reload);
    gulp.watch("./app/js/**/*.js", ['js']).on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./app/css"))
        .pipe(browserSync.stream());
});

// process JS files and return the stream.
gulp.task('js', function() {
    return gulp.src('./app/js/**/*js')
        .pipe(browserify())
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});
