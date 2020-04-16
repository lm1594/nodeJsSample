var express = require('express');
var router  = express.Router();

/**
 * BaseURL : web.js router에 선언한 BaseUrl을 표시. request url을 쉽게 파악하기 위함
 *  - /club
 **/

/**
 * 실제 업무처리 로직이 명시된 router import
 */
var clubList	= require('./clubList');		// 클럽목록
var clubDetail  = require('./clubDetail');		// 클럽상세

router.get('/list', function(req, res, next) {
	clubList.list(req, res);
});

router.get('/detail/:clubSn', function(req, res, next) {
	clubDetail.detail(req, res);
});

module.exports = router;