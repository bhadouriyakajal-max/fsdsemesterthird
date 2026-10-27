const fs= require('fs')
const readStream=fs.createReadStream("./intro.txt",{encoding:"utf-8"})
const writeStream=fs.createWriteStream("./output.txt")
//Write data on output.txt
writeStream.write("Hello Node")

writeStream.on("finish",()=>{
    console.log("File write has been finished");
})
readStream.on("data",(chunk)=>{
    console.log("Data Recieved:");
    console.log(chunk);
})
readStream.on("end",()=>{
    console.log("reading completed");
})
readStream.on("error",(error)=>{
    console.log("Error:",error);
})
writeStream.on("error",(error)=>{
    console.log("Error:",error);
})