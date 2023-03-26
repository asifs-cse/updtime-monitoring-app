/*
*title: updtime Monitoring application
*author: Asif Shahriar
*language: Node js
*/

//dependecies

const http = require('http');
const url = require('url');

//app object -module scaffolding
const app = {};

// configuration
app.config = {
    port: 3000,
};

//create server
app.createServer = ()=>{
    const server = http.createServer(app.hadelReqRes);
    server.listen(app.config.port, ()=>{
        console.log(`Listening to port ${app.config.port}`);
    })
}

//app handler request

app.hadelReqRes = (req, res)=>{
    //request handeling
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const treamedPah = path.replace(/^\+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const querySringObject = parsedUrl.query;
    //console.log(querySringObject);
    const headesrsObject = req.headers;
    //console.log(headesrsObject);

    
    //response handel
    res.end('Hello world');
};

// start the server
app.createServer();