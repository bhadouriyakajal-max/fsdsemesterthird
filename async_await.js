function getUser() {
    return new Promise((resolve, reject) => {

        let user = true;

        if (!user) {
            reject(new Error("User not exist."));
        }
        else {
            resolve({
                username: "John Doe",
                role: "Engineer"
            });
        }

    });
}

async function fetchUser() {
    const response = await getUser();
    console.log(response);
   
}
fetchUser();
 console.log("Hello");