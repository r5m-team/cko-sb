var gulp = require('gulp');
var shell = require('gulp-shell');

module.exports = function (options) {
	var version = 'master';
	var tagString = version;
	var self = this;
	if (options.packageJson.r5m.clientVersion) {
		version = options.packageJson.r5m.clientVersion;
		tagString = 'tags/' + version;
	}

	return shell.task([
		'mkdir -p ./dist/engine',
		'mkdir -p ./tmp/html',
		'./node_modules/.bin/bower install https://github.com/milikhin/r5m-client.git#' + version,
		'rm -rf bower_components/r5m-cms; ',
		'git clone git@github.com:milikhin/r5m-client.git bower_components/r5m-cms',
		'cd bower_components/r5m-cms; git checkout ' + tagString + ' -b working;',
		'bower update'
	]);
};
