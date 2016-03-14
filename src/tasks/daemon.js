var gulp = require('gulp');
var browserSync = require('browser-sync').create();

function registerWatchTasks() {
	gulp.task('css-watch', ['css'], function () {
		browserSync.reload();
	});
	gulp.task('js-watch', ['js'], function () {
		browserSync.reload();
	});
	gulp.task('html-watch', ['html'], function () {
		browserSync.reload();
	});
}

module.exports = function () {
	registerWatchTasks();

	return function () {
		browserSync.init({
			server: {
				baseDir: "./dist"
			}
		});

		gulp.watch('css/**/*.css', ['css-watch']);
		gulp.watch('bower_components/**/*.css', ['css-watch']);
		gulp.watch('bower_components/**/*.js', ['js-watch']);
		gulp.watch('tpl/**/*.ejs', ['html-watch']);
		gulp.watch('bower_components/r5m-cms/**/*.ejs', ['html-watch']);
	};
};
