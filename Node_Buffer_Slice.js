const { Buffer } = require("buffer");

var buffer1=new Buffer('TutorialsPoint');
var buffer2=buffer1.slice(0,9);
console.log("buffer2:" + buffer2.toString());