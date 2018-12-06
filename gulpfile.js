const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const rollup = require('gulp-rollup');
const rename = require('gulp-rename');
const shell = require('gulp-shell');

const jsDir = 'static/js/';
const distDir = 'dist/';

/**
 * This task checks if scripts are written correctly.
 */
gulp.task('lint', () => {
	return gulp.src([jsDir + '**/*.js'])
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});

/**
 * This task compile scripts into one es5 script.
 */
gulp.task('build', ['lint'], () => {
	gulp.src([jsDir + '**/*.js'])
		.pipe(rollup({
			format: 'cjs',
			input: jsDir + 'main.js',
			treeshake: false
		}))
		.pipe(babel({
			presets: ['env']
		}))
		.on('error', showError)
		.pipe(rename('es6-logger.js'))
		.pipe(gulp.dest(distDir))
});

/**
 * This task generate documentation of all js files. Documentation is generated via esdoc.
 */
gulp.task('esdoc', shell.task([
  './node_modules/.bin/esdoc'
]));

/**
 * Error printer.
 * @param {Error} error
 */
function showError (error) {
	  console.error(error);
	  this.emit('end');
}
