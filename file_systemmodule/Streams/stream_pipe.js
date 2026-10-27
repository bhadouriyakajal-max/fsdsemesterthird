const fs= require('fs')
const readStream=fs.createReadStream("./intro.txt",{encoding:"utf-8"})
const writeStream=fs.createWriteStream("./output.txt")
readStream.on("data",(chunk)=>{
   console.log(chunk.toString());
})
readStream.pipe(writeStream)