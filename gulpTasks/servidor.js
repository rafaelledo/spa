const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function servidor() {
  return gulp.src('build')
    .pipe(webserver({
      port: 3000,
      open: false,
      livereload: true
    }))
}

function monitorarArquivos(cb) {
  watch('src/**/*.html', () => gulp.series('appHTML')())
  watch('src/**/*.scss', () => gulp.series('appCSS')())
  watch('src/**/*.js', () => gulp.series('appJS')())
  watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())
  return cb()
}

module.exports = {
  monitorarArquivos,
  servidor
}