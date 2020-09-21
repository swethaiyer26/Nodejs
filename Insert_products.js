var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mydb1"
});
con.connect(function(err){
if (err) throw err;
var sql="INSERT INTO products (product_id,name) VALUES ?";
var values=[
    [154,'Chocolate heaven'],
    [154,'Melody'],
    [155,'Dark fantasy'],
    [156,'Vanilla Dreams'],
];
con.query(sql,[values],function(err,result){
    if(err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
});
});