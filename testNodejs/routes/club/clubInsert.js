var dbConObj = require('../../conf/db_info');
var dbconn   = dbConObj.init();

var clubInsert = {
		// 신규화면
		insertView : function(req, res) {
			res.render('club/insertView', {data: '클럽 신규'});
		},
		
		// 신규 등록
		insert : function(req, res) {
			var sql = 'INSERT INTO CLUB VALUES ( (SELECT IFNULL(MAX(CLUB_SN)+1, 1) FROM CLUB B ), ?)';
			dbconn.query(sql, req.body.clubNm, function(err, result, field){
				console.log("sql : " + sql);
				console.log("err : " + err);
				console.log("field : " + field);
				console.log("result : " + result);
				console.log("신규 클럽 INSERT 끝");
				res.send({result: result, err:err, field:field});
			});
		}
};

module.exports = clubInsert;