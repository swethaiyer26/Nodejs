var fs=require('fs');
fs.open('writefile.txt','w',function(err,file){
    if (err) throw err;
    console.log('Saved!');
});