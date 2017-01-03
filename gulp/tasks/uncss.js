'use strict';

var gulp = require('gulp-help')(require('gulp'));
var uncss = require('gulp-uncss');

var config = require('./../config.js');
var build = require('./../utils/buildHelper.js');

// Output size of dist folder
gulp.task('uncss', false, function () {
  return gulp.src(config.buildSize.srcCss)
    .pipe(uncss({
            html: ['dist/*.html']
    }))
    .pipe(gulp.dest('dist/styles/purecss'));
});
