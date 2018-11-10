const gulp = require("gulp");
const gulpPlumber = require("gulp-plumber");
const gulpConcat = require("gulp-concat");

const sources = [
	"./js/source/*.js",
	"./js/source/Character/*.js",
];

gulp.task("default", () => {
	gulp.watch(sources, ["compress"]);
});

gulp.task("compress", () => {
	gulp.src(sources)
		.pipe(gulpPlumber())
		.pipe(gulpConcat("build.js"))
		.pipe(gulp.dest("./js/build/"));
});



/* eslint-env node */