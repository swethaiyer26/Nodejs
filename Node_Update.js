var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mydb"
});
con.connect(function(err){
    if (err) throw err;
    var sql="UPDATE customers SET address='WallStreet 123' WHERE address='One way 98'";
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log(result.affectedRows + "record(s) updated");
    });

});