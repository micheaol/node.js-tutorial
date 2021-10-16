const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    // console.log(req.url, req.method) => This is the object of the request sent to the server
    
    //First we need to set the res header:
    res.setHeader('Content-Type', 'text/html');


    //Creating the path/route to different pages:
    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }
    //read file using fs module:
    fs.readFile(path, (err, data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            // res.write(data);
            res.end(data);// If we are just sending one file into the res, then we can just pass it directly into the end method.
        }
    });
});


//Create listening event on the server:
server.listen(3000, ()=>{
    console.log("listening on port 3000")
});