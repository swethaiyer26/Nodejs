const { Buffer } = require("buffer");

var buffer1=new Buffer('Tutorialspoint  ');
var buffer2=new Buffer('Simple learning');
var buffer3=Buffer.concat([buffer1,buffer2]);
console.log("buffer3 content: " +  buffer3.toString());