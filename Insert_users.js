var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mydb1"
});
con.connect(function(err){
if (err) throw err;
var sql="INSERT INTO users (name,favorite_product) VALUES ?";
var values=[
    ['John',154],
    ['Peter',154],
    ['Amy',155],
    ['Henry',156],
    ['Bill',null],
    ['Sookie',160]
];
con.query(sql,[values],function(err,result){
    if(err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
});
});