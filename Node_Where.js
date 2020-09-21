var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
//   con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
    // con.query("SELECT * FROM customers WHERE address LIKE 'H%'",function(err,result){
        var adr='Mountain 21';
        var name="Amy";
        // var sql='SELECT * FROM customers WHERE address= ' + mysql.escape(adr)
        var sql='SELECT * FROM customers WHERE name=? OR address=?';
        con.query(sql,[name,adr],function(err,result){
            if (err) throw err;
            console.log(result);
  });
});