var mysql	= require('mysql');
var os		= require('os');	// 호스트 이름을 가져오기 위한 모듈

var dbconnInfo = {
		dev:{
			host: 'localhost',
			port: '3306',
			user: 'testNode',
			password: 'testNodePw',
			database: 'testdb',
			multipleStatements: true
		},
//		real:{
//			
//		}
};

var dbconnection = {
		init : function(){
			var hostname = os.hostname();
			if(hostname === 'DESKTOP-R62U8L4'){
				// 로컬
				return mysql.createConnection(dbconnInfo.dev);
			}else {
				// 운영
				//return mysql.createConnection(dbconnInfo.real);
			}
			
		}
};

module.exports = dbconnection;



// 예제 테이블 생성 쿼리
//CREATE TABLE `club` (
//  `CLUB_SN` int(11) NOT NULL,
//  `CLUB_NM` varchar(20) DEFAULT NULL,
//  PRIMARY KEY (`CLUB_SN`)
//)