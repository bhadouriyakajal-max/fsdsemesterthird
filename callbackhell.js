function getuser(id,callback){
    setTimeout(() => {
        console.log("User fetched");
        const user={
            id:1,
            username:"Zishan"
        }
callback(null,user)
    },1000);
}
function getprofile(userid, callback) { 
    setTimeout(() => { 
        console.log("User fetched"); 

        const profile = { 
            id: 1, 
            username: "diva", 
            location: "new delhi", 
            interest: ["web dev", "agentic ai"] 
        };

        callback(null, profile);

    }, 1000); 
}
function getPosts(username, callback) {

    setTimeout(() => {

        console.log("Post fetched");

        const posts = ["post1", "post2", "post3"];

        callback(null, posts);

    }, 1000);

}
 getuser(10101, (error, user) => {

    if (error) {
        console.log(error);
        return;
    }

    getprofile(user.id, (error, profile) => {

        if (error) {
            console.log(error);
            return;
        }

        getPosts(profile.username, (error, posts) => {

            if (error) {
                console.log(error);
                return;
            }

            console.log("Post", posts);
        });
    });
});