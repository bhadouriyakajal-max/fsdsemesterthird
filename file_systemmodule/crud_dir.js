// import fs from "fs/promises"
//  async function greet(){
//     return "Hello"
// }
// greet()
// .then((res)=>{
//     console.log(res);
// })
// .catch((error)=>{
//     console.log(error);
// })
import fs from "fs/promises"

// fs.writeFile("log.txt", "User sign up")
// .then(() => {
//     console.log("File written")

//     return fs.readFile("log.txt", "utf-8")
// })
// .then((res) => {
//     console.log(res)
// })
// .catch((err) => {
//     console.log(err)
// })
async function fileHandling(filename,content){
    await fs.writeFile(filename,content)
    console.log("File created");
    const data =await fs.readFile(filename,{encoding:"utf8"})
    console.log("Data:",data);
    }
  fileHandling("user.txt","Username:kajal")