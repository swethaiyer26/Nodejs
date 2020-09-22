const { Buffer } = require("buffer");

var buffer1=new Buffer('ABCD');
var buffer2=new Buffer(4);
buffer1.copy(buffer2);
console.log("Buffer2:" + buffer2.toString());