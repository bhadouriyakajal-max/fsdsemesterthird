import fs from 'fs'
console.log("Synchronous task");
setTimeout(()=>{
    console.log("Set Timeout");
},2000)
setInterval(()=>{
    console.log("Set Interval");
},2000)
fs.writeFile("notes.txt","Hello ELCE A ",(err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("File has been written successfull");
} )
setImmediate(()=>{
    console.log("Set Immediate");
})