var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');


gulp.task('default', ['webserver', 'watch']);

/*Serves the aplication*/
gulp.task('webserver', function () {
    connect.server({
        root: 'www',
        livereload: true
    });

});

/*gulp saas for scss*/
gulp.task('sass', function (done) {
    gulp.src(['./assests/scss/*.scss'])
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest('./assets/css/'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({
            extname: '.min.css'
        }))
        // .pipe(gulp.dest('./www/assets/css/'))
        .pipe(gulp.dest('./assets/css/'))
        .on('end', done);
});

//html files
gulp.task('html', function () {
    gulp.src('./www/*.html')
        .pipe(connect.reload());
})
gulp.task('watch', function () {
    gulp.watch(['./www/*.html'], ['html']);
    gulp.watch(['./assests/scss/*.scss'], ['sass']);
})