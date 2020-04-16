var dbConObj = require('../../conf/db_info');
var dbconn	 = dbConObj.init();

var clubDetail = {
		// 클럽 상세
		detail: function(req, res) {
			var clubSn = req.params.clubSn;
			var sql = 'SELECT * FROM CLUB WHERE CLUB_SN=?'
			dbconn.query(sql, clubSn, function(err, results, field) {
				console.log("sql : " + sql);
				console.log("err : " + err);
				console.log("field : " + field);
				console.log("results : " + results);
				res.render('club/clubDetail', {data: 'MySQL 상세 조회 테스트 EJS', clubDetail : results});
			});
		}
};

module.exports = clubDetail;