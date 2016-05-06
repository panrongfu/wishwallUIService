var koa = require('koa');
var app = koa();
var path = require('path');
var send = require('koa-send');

app.use(function*() {
  var opts = {root: __dirname + '/public'};

  if ('/' == this.path) {
    yield send(this, "/public/user/views/login.html");
  } else {
    yield send(this, this.path, opts);
  }
});

app.listen(4000);
console.log("app:"+4000);