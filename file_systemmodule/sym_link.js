import fs from 'fs' 
fs.symlink("notes.txt","link.txt",(err)=>{ 
    if(err){ 
        console.log(err); 
        return 
    } 
    console.log("Symbolic Link created"); 
}) 
fs.stat("link.txt",(err,stats)=>{ 
if(err){ 
    console.log(err); 
    return 
} 
console.log(stats.isSymbolicLink()); 
}) 
 
 
fs.lstat("link.txt", (err, stats) => { 
    if (err) { 
        console.log(err); 
        return; 
    } 
 
    console.log(stats.isSymbolicLink()); 
}); 
 
fs.rename("notes.txt", "new_notes.txt", (err) => { 
    if (err) { 
        console.log(err); 
        return; 
    } 
 
    console.log("File renamed successfully"); 
}); 
fs.truncate("new_notes.txt", 0, (err) => { 
    if (err) { 
        console.log(err); 
        return; 
    } 
 
    console.log("File truncated successfully"); 
}); 
fs.unlink("notes.txt",(err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("File deleted");
})