//File system in NODE.js
const fs = require('fs');
//Reading file
// fs.readFile('./docs/blog.txt', (err, data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
// });

//Writting file:
// fs.writeFile('./docs/blog.txt', 'Hello, people I am learning Node.js', ()=>{
//     console.log("File Chnaged")
// });

// //If we try to write in a file that does not exit: Node will creat the file for us:
// fs.writeFile('./docs/take.txt', 'I have just been created', ()=>{
//     console.log('New file created')
// });

//Directories;
fs.mkdir('./assests', (err)=>{
    if(err){
        console.log(err)
    }
    console.log('new folder created')
});