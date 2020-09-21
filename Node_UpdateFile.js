var fs=require('fs');
fs.appendFile('appendfile.txt','This is me',function (err){
    if (err) throw err;
    console.log('Updated');
    
});