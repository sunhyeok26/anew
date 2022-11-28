const mysql = require('mysql2')

const pool = mysql.createPool(
	{
		// Mysql Connectrion Info
		//rds
		//#host="database-1.cwfxwhrdeo49.ap-northeast-2.rds.amazonaws.com",
		// ec2 ubuntu
		host = "13.209.216.238",
		user = "mysql",
		password = "1234",
		database = "testdb"
	}
)
const promisePool = pool.promise()

module.exports = promisePool;
		
