"use strict";

var gulp = require('gulp');
var options = {
	packageJson: require('./package')
};

var jsBuilder = require('./src/tasks/js-build');
var cssBuilder = require('./src/tasks/css-build');
var htmlBuilder = require('./src/tasks/html-build');
var copyOnly = require('./src/tasks/copy-only');
var ghDeploy = require('./src/tasks/deploy');
var install = require('./src/tasks/install');
var daemon = require('./src/tasks/daemon');

/* Basic tasks */
gulp.task('js', jsBuilder());
gulp.task('css', cssBuilder());
gulp.task('html', htmlBuilder(options));
gulp.task('assets', copyOnly());

gulp.task('daemon', ['js', 'css', 'html', 'assets'], daemon());
gulp.task('deploy', ghDeploy(options));
gulp.task('install', install(options));

gulp.task('default', ['daemon']);
