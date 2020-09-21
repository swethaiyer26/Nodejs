var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password:"",
  database: "mydb1"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql="CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY ,name VARCHAR(255),favorite_product INT(11))";
  con.query(sql,function(err,result){
      if (err) throw err;
      console.log("table created");
  });
});