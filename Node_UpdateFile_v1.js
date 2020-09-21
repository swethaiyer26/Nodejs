var fs=require('fs');
fs.writeFile('append.txt','I like nodejs',function(err){
    if (err) throw err;
    console.log('Replaced');
    
});