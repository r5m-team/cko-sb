"use strict";

/* Gulp tasks */
var shell = require('gulp-shell');

function getHtmlCompileScripts(options) {
	var htmlFiles;
	var htmlCompileScripts = [];

	try {
		htmlFiles = options.packageJson.r5m.htmlFiles;
	} catch (err) {
		throw err;
	}

	htmlFiles.forEach(function (fileName) {
		if (options.packageJson.r5m.minifyHtml) {
			htmlCompileScripts.push('./node_modules/.bin/ejs-on-command tpl/' + fileName + '.ejs -j \'{"filename": "./tpl/' + fileName + '"}\' > tmp/html/' + fileName + '.html');
			htmlCompileScripts.push('./node_modules/.bin/html-minifier --config-file ./.htmlminirc -o dist/' + fileName + '.html ./tmp/html/' + fileName + '.html');
		} else {
			htmlCompileScripts.push('./node_modules/.bin/ejs-on-command tpl/' + fileName + '.ejs -j \'{"filename": "./tpl/' + fileName + '"}\' > dist/' + fileName + '.html');
		}
	});

	return htmlCompileScripts;
}


module.exports = function (options) {
	return shell.task(getHtmlCompileScripts(options));
};
