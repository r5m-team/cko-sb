var gulp = require('gulp');
var shell = require('gulp-shell');

module.exports = function () {
	return shell.task([
		'./node_modules/.bin/r.js -o cssIn=bower_components/r5m-cms/css/all.css out=tmp/engine.css',
		'./node_modules/.bin/r.js -o cssIn=css/all.css out=dist/engine/lp.css'
	]);
};
