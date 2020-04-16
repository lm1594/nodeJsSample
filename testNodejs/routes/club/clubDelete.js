var dbConObj = require('../../conf/db_info');
var dbconn   = dbConObj.init();

var clubDelete = {
	// 클럽 삭제
	clubDel : function (req, res) {
		var sql = 'DELETE FROM CLUB WHERE CLUB_SN = ?';
		
		dbconn.query(sql, req.body.clubSn, function(err, results, field) {
			console.log("sql : " + sql);
			console.log("err : " + err);
			console.log("field : " + field);
			console.log("results : " + results);
			console.log("클럽 삭제 끝");
			res.send({results: results, err:err, field:field});
		});
	}
};

module.exports = clubDelete;