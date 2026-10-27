console.log("start")
for(let i=0;i<10;i++){
    console.log(i)
}
console.log("end")
console.log("start async")
setTimeout(()=>{
    console.log("hello world");
},2000)
console.log("end async")