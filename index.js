const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;

const server = http.createServer((req, res) => {
    let filePath = '';
    switch(req.url) {
        case '/' :
            filePath = './project/index.html';
            break;
        case '/about' :
            filePath = './project/about.html';
            break;
        case '/contact-me' :
            filePath = './project/contact-me.html';
            break;
        default: 
            filePath = './project/404.html';
            res.statusCode = 404;
            break
    }
    fs.readFile(path.join(__dirname, filePath), (err, data) => {
        if(err) {
            res.writeHead(500, {'Content-Type': 'text/palin'});
            res.end("Internal server error");
        }else{
            res.writeHead(res.statusCode || 200, {'Content-Type': 'text/html'});
            res.end(data)
        }
    })
})

server.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})