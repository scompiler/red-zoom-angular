const gulp = require('gulp');


function copyLibrary() {
    return gulp.src('dist/ngx-red-zoom/**/*')
        .pipe(gulp.dest('package'));
}


function copyStyles() {
    return gulp.src('src/scss/library/**/*')
        .pipe(gulp.dest('package/scss/styles'));
}


function copyScss() {
    return gulp.src('src/scss/base.scss')
        .pipe(gulp.dest('package/scss'));
}


exports.pack = gulp.series(copyLibrary, copyStyles, copyScss);

