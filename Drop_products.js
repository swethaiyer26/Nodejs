var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb1"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DROP TABLE users";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table deleted");
  });
});