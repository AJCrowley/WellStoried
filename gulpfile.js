var gulp = require('gulp'),
	compass = require('gulp-compass'),
	uglify = require('gulp-uglify'),
	imageop = require('gulp-image-optimization'),
	plumber = require('gulp-plumber'),
	watch = require('gulp-watch');

gulp.task('build', ['images', 'compass', 'uglify', 'dist']);

gulp.task('dist', function() {
	gulp.src('./src/*.html')
	.pipe(gulp.dest('./dist'));
	gulp.src('./src/css/*.css')
	.pipe(gulp.dest('./dist/css'));
	gulp.src('./src/fonts/*')
	.pipe(gulp.dest('./dist/fonts/'));
});

gulp.task('uglify', function() {
	return gulp.src('./src/js/**/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('./dist/js/'));
});

gulp.task('compass', function() {
	gulp.src('./src/scss/*.scss')
		.pipe(plumber())
		.pipe(compass({
			config_file: './config.rb',
			css: './src/css',
			sass: './src/scss'
		}))
	.pipe(gulp.dest('./css'));
});

gulp.task('images', function(cb) {
	gulp.src(['./src/img/**/*.png','./src/img/**/*.jpg','./src/img/**/*.gif','./src/img/**/*.jpeg']).pipe(imageop({
		optimizationLevel: 5,
		progressive: true,
		interlaced: true
	})).pipe(gulp.dest('./dist/img')).on('end', cb).on('error', cb);
});

gulp.task('stream', function () {
	gulp.watch('./src/scss/**/*.scss', ['compass']);
});