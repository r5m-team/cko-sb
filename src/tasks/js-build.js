var gulp = require('gulp');
var shell = require('gulp-shell');

module.exports = function () {
	return function () {
		return gulp.src(['bower_components/requirejs/require.js'])
			.pipe(shell([
				'./node_modules/.bin/r.js -o \
			generateSourceMaps=true \
			preserveLicenseComments=false \
			optimize=uglify2 \
			normalizeDirDefines=skip \
			baseUrl=. \
			paths.r5m=bower_components/r5m-cms/js \
			paths.vendor=bower_components \
			name=bower_components/r5m-cms/js/index \
			out=dist/engine/lp.js'
			]))
			.pipe(gulp.dest('./dist/engine'));
	};
};
