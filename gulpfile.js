// TESTES
// gulp.task('sass', function () {
//     return gulp.src('source/styles/**/*.scss')
//       .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
//       .pipe(gulp.dest('dist/css'));
//   });
//   gulp.task('default', gulp.series('sass'));

  
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')


function compStyle(){
    return gulp.src('./source/styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
}

function compImages(){
    return gulp.src('./source/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
}

exports.default = gulp.parallel(compStyle, compImages)
exports.watch = function(){
    gulp.watch ('./source/styles/*.scss',gulp.parallel(compStyle))
}