var fs=require('fs');
fs.unlink('appendfile.txt',function(err){
    if (err) throw err;
    console.log('deleted');
});