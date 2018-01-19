var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());

app.get('/show', function(req, res) {
  // 将客户端发送的Cookie打印输出
  var cookies = req.cookies;
  var text = JSON.stringify(cookies);
  res.send('<h1>Show-Cookie: ' + text + '</h1>');
});

app.get('/set', function(req, res) {
  // 设置Http的Set-Cookie消息头，将Cookie保存到客户端
  res.cookie('user', 'ZhangSan');
  res.send('<h1>Set-Cookie</h1>');
});

app.get('/del', function(req, res) {
  // 设置Http的Set-Cookie消息头，将Cookie从客户端删除
  res.clearCookie('user');
  res.send('<h1>Del-Cookie</h1>');
});

app.listen(8080);
