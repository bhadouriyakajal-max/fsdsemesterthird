const fs = require('fs');
fs.watch("info.txt",(curr,prev)=>{
    console.log("curr:",curr);
    console.log("prev:",prev);
})
//fs.createReadStream
// fs.createWriteStreame
// Event
// data
// end 
// error