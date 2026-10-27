import fs from 'fs'

// 1. Create / Write file
fs.writeFile("config.txt", "ELCE-A", (err) => {

    if (err) {
        console.log(err)
        return
    }

    console.log("File created")
})


// 2. Read file
fs.readFile("config.txt", "utf-8",(err, data) => {

    if (err) {
        console.log(err)
        return
    }

    console.log("Data:", data)
})


// 3. Append data
fs.appendFile("config.txt", "ELCE-A", (err) => {

    if (err) {
        console.log(err)
        return
    }

    console.log("Data appended")
})
//deleted
fs.rm("config.txt", (err) => {

    if (err) {
        console.log(err)
        return
    }

    console.log("File deleted")
})