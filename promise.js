const promise1 = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve({
            username: "Piya",
            location: "new delhi"
        });
    } else {
        reject(new Error("User not fetched"));
    }

});

const promise2 = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve({
            message: "User fetched"
        });
    } else {
        reject(new Error("User not fetched"));
    }

});

console.log(promise1);

promise1
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });