var fs=require('fs');
fs.rename('append.txt','rename.txt',function(err){
    if (err) throw err;
    console.log('renamed');
});