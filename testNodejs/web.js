// 필요한 모듈 선언
var express = require('express');
var http 	= require('http');
var bodyParser = require('body-parser');
var app		= express();

// express 서버 포트 설정(cafe24 호스팅 서버는 8001 포트 사용)
app.set('port', process.env.PORT || 8001);

// 화면 엔진을 ejs로 설정
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// BodyParser 설정
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// 서버생성
http.createServer(app, function(req,res) {
	res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
}).listen(app.get('port'), function(req, res){
	console.log('Express server listening on port ' + app.get('port'));
});

// 라우팅 모듈 선언
var indexRouter = require('./routes/index');
var cludRouter 	= require('./routes/club/club');

// request 요청 URL과 처리 로직을 선언한 라우팅 모듈 매핑
app.use('/', indexRouter);
app.use('/club', cludRouter);