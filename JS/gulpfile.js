const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass() {
  return gulp.src('./SCSS') // Source folder
    .pipe(sass().on('error', sass.logError)) // Compile Sass and log errors
    .pipe(gulp.dest('dist/css')); // Destination folder
}

function watchSass() {
  gulp.watch('./CSS', compileSass); // Watch for changes
}

exports.default = gulp.series(compileSass, watchSass);
