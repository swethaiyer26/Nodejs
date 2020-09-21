var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mydb1"
});
con.connect(function(err){
    if(err) throw err;
var sql= "SELECT users.name AS user, products.name AS favorite FROM users LEFT JOIN products ON users.favorite_product = product_id";
// var sql= "SELECT users.name AS user, products.name AS favorite FROM users RIGHT JOIN products ON users.favorite_product = product_id";
// var sql= "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = product_id";
con.query(sql,function(err,result){
    if (err) throw err;
    console.log(result);
});
});