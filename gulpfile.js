const gulp = require('gulp');
const del = require('del');


function clean() {
    return del('package');
}


function copyLibrary() {
    return gulp.src('dist/ngx-red-zoom/**/*')
        .pipe(gulp.dest('package'));
}


function copyScss() {
    return gulp.src('src/scss/library/**/*')
        .pipe(gulp.dest('package/styles'));
}


exports.pack = gulp.series(clean, copyLibrary, copyScss);

