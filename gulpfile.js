var gulp = require('gulp');
var fs = require('fs');

fs.readdirSync(__dirname + '/gulp').foreach(function (task){
	require('./gulp/' + task);
});

gulp.task('dev', ['watch:css', 'watch:jss', 'dev:server']);
