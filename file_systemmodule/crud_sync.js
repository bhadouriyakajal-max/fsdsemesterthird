//CRUD
//Sync
//Async
// -->Callback based method
// -->Promise based method

import fs from 'fs'
//create the file 
fs.writeFileSync("notes.txt","Hello World")
//read the file
const data=fs.readFileSync("notes.txt","utf8")
console.log("Data:",data);
//update the file
fs.appendFileSync("notes.txt","Hello World")
//delete the file
fs.rmSync("notes.txt")