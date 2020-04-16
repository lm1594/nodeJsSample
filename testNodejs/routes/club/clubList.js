var dbConObj = require('../../conf/db_info');			// 사용자 정의 함수 사용
var dbconn	 = dbConObj.init();

var clubList = {
		// 클럽목록
		list : function(req, res) {
			var sql = 'SELECT * FROM CLUB'; 			// 목록조회
			
			dbconn.query(sql, function(err, results, field) {
				console.log("sql : " + sql);
				console.log("err : " + err);
				console.log("field : " + field);
				console.log("results : " + results);
				console.log("클럽 LIST 조회 끝");
				res.render('club/clubList', {data: 'MySQL 조회 테스트 EJS', clubList : results});
			});
		}
};


module.exports = clubList;