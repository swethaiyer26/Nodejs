var fs=require('fs');
fs.appendFile('appendfile.txt','Hello World!!!',function (err){
    if (err) throw err;
    console.log('Saved!');
});

