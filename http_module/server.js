import http from 'http'
//to handle the request and send the response
const server =http.createServer((req, res)=>{
    res.statusCode =200
    res.setHeader("Content-Type","text/plain")
    res.setHeader("Content-Type","application/json") //FOR JSON
    res.setHeader("Content-Type","text/html")   //FOR HTML
    res.writeHead(200,{
        "Content-Type " : "text/plain"
    })
    res.end("Welcome Home")
})
server.listen(3000,()=>{
    console.log("Server is running...");
})