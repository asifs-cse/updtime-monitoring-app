/*
*title: updtime Monitoring application
*/

//dependecies

const http = require('http');

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
    res.end('Hello world');
};

app.createServer();