const gulp = require("gulp");
const gulpPlumber = require("gulp-plumber");
const gulpConcat = require("gulp-concat");

gulp.task("default", () => {
	gulp.src([
		"./js/source/*.js",
		"./js/source/Character/*.js"
	])	.pipe(gulpPlumber())
		.pipe(gulpConcat("build.js"))
		.pipe(gulp.dest("./js/build/"));
});



/* eslint-env node */