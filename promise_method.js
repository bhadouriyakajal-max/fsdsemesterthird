const promise1 = new Promise((resolve, reject) => {
    const user = {
        name: "Divya",
        age: 20
    };

    resolve(user);
});

const promise2 = new Promise((resolve, reject) => {
    const order = {
        orderId: 101,
        product: "Laptop"
    };

    resolve(order);
});

promise1
    .then((user) => {
        console.log("User Info:", user);
        return promise2;
    })
    .then((order) => {
        console.log("Order Info:", order);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
//promise all
Promise.all([promise1, promise2])
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.log(error);
    });
//promise any
Promise.any([promise1, promise2])
    .then((response) => {
        return response;
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error.name);
    });
//promise race
Promise.race([promise1, promise2])
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });
//promise allsettled
Promise.allSettled([promise1, promise2])
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error.name);
    });
//chaining
Promise.any([promise1, promise2])
    .then((response) => {
        return response;
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error.name);
    });