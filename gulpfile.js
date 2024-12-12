// TESTES
// gulp.task('sass', function () {
//     return gulp.src('source/styles/**/*.scss')
//       .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
//       .pipe(gulp.dest('dist/css'));
//   });
//   gulp.task('default', gulp.series('sass'));

  
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))


function compStyle(){
    return gulp.src('./source/styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
}

// exports.default = compStyle
exports.watch = function(){
    gulp.watch ('./source/styles/*.scss',gulp.parallel(compStyle))
}