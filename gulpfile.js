var gulp = require('gulp');
var ts = require('gulp-typescript');
var uglify = require('gulp-uglify');

gulp.task('ts', function () {
    return gulp.src('index.ts')
        .pipe(ts({
            noImplicitAny: true,
			out: 'etype.js'
        }))
		.pipe(uglify())
        .pipe(gulp.dest('src/'));
});

gulp.task('default', ['ts']);
