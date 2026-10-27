import EventEmitter from "node:events";

const emitter = new EventEmitter();

emitter.on("userSignup", (user) => {
    console.log(`Welcome ${user.name}!`);
});

emitter.on("userSignup", (user) => {
    console.log(`User ${user.name} added to database`);
});

emitter.on("userSignup", (user) => {
    console.log(`Notification email sent to ${user.email}`);
});

const user = {
    name: "Divyanshi",
    email: "divyanshi@gmail.com"
};

emitter.emit("userSignup", user);