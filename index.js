/*
*title: updtime Monitoring application
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

app.hadelReqRes = (req, res)=>{
    //request handeling
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const treamedPah = path.replace(/^\+|\/+$/g, '');
    console.log(treamedPah)
    res.end('Hello world');
};

app.createServer();