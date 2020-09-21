var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mydb1"
});
con.connect(function(err){
    if (err) throw err;
    var sql="CREATE TABLE products (product_id INT(11),name VARCHAR(255))";
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log("table created!!");
    });
});