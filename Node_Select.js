var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  //Select all customers and return the result object:
//   con.query("SELECT * FROM customers", function (err, result, fields) {
    con.query("SELECT name,address FROM customers",function (err,result,fields){
    if (err) throw err;
    // console.log(result[3].address);
    console.log(fields);
  });
});
