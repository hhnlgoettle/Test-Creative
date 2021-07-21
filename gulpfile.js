const gulp = require('gulp');
const http = require('http');
const connect = require('connect');
const serveStatic = require('serve-static');

let server;

gulp.task('http:serve', (done) => {
  const app = connect();
  app.use('/', serveStatic('www/'));
  server = http.createServer(app).listen(9000, done);
  done();
});

gulp.task('http:cleanup', (done) => {
  if (server) {
    server.close();
  }
  done();
});
