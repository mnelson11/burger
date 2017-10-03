var mysql = require("mysql");

var connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: "root",
	database: "burgers_db"
});

connection.connect(function(err) {
	if (err) {
		console.error("Error connecting: ", err.stack);
		return;
	}
});