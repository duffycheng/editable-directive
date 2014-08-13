var gulp = require('gulp');
var connect = require('gulp-connect');
var protractor = require("gulp-protractor").protractor;

gulp.task('server:dev', function () {
  connect.server({
    port: 8888
  });
});

gulp.task('server:test', function () {
  connect.server({
    port: 7777
  });
});

function runProtractor(debug) {
  return function() {
    var args = ['--baseUrl', 'http://127.0.0.1:8000'];
    if(debug) {
      args.unshift('debug');
    }
    gulp.src(["./e2e-tests/**/*Spec.js"])
        .pipe(protractor({
            configFile: "protractor.js",
            args: args
        })) 
        .on('error', function(e) { throw e })
  }
}

gulp.task('run-e2e-tests', runProtractor());
gulp.task('debug-e2e-tests', runProtractor(true));

gulp.task('default', ['server:dev']);

gulp.task('test:e2e', ['run-e2e-tests']);
gulp.task('test:e2e:debug', ['debug-e2e-tests']);
