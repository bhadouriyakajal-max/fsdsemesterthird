function greet(username,callback){
   console.log("Welcome")
   if(typeof callback==="function" ) {
    callback(username)
   }
}
greet("shrishti",()=>{
    console.log("Hello," ,username)
})