const gulp = require('gulp')
const webserver = require('gulp-webserver')

function monitorarArquivos () {
  return gulp.src('build')
    .pipe(webserver({
      port: 3000,
      open: false,
      livereload: true
    }))
}

function servidor (cb) {
  return cb()
}

module.exports = {
  monitorarArquivos,
  servidor
}