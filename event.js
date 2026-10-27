import EventEmitter from "node:events";
const emitter =new EventEmitter()
//Event registration
emitter.on("orderplaced",(ordername,orderprice)=>{
    console.log(`Order ${ordername} and price:${orderprice} Placed Successfully`)
})
emitter.on("orderplaced",()=>{
    console.log("Notification send to the user");
})
emitter.on("orderplaced",()=>{
    console.log("Inventory updated");
})

emitter.emit("orderplaced","Laptop",2000000)