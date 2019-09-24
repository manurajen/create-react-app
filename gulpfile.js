const { src,dest,series } = require('gulp');
const sass = require('gulp-sass');
const cssminifier = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const concat = require('gulp-concat');

const inFiles = {
  scssPath: 'src/**/*.scss',
}

const outFiles = {
  cssPath: 'dist/css',
}

function sassToCss(){
  return src(inFiles.scssPath)
  .pipe(sass())
  .pipe(cssminifier())
  .pipe(autoprefixer('last 2 version'))
  .pipe(concat('style.min.css'))
  .pipe(dest(outFiles.cssPath));
}


exports.default= series(sassToCss);