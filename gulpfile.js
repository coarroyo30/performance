"use strict";

var gulp = require('gulp'),
	image = require('gulp-image');

gulp.task('image', function () {
	gulp.src('./img/*')
		.pipe(image({
			pngquant: false,
		    optipng: true,
		    zopflipng: false,
		    jpegRecompress: true,
		    jpegoptim: true,
		    mozjpeg: true,
		    gifsicle: true,
		    svgo: true,
		    concurrent: 10
		}))
		.pipe(gulp.dest('img'))
});

gulp.task('default', ['image']);