var createServer = require("node:http").createServer;
var express = require('express');
var Server = require('socket.io').Server;
var app = express();
var server = createServer(app);
var connection = new Server(server, {
    cors: {
        origin: "http://localhost:5173"
    }
});
connection.on('connection', function (socket) {
    console.log("client connected");
    socket.on('chat message', function (msg) {
        connection.emit('chat message', msg);
    });
    socket.on('disconnect', function () {
        console.log('client disconnected');
    });
});
server.listen(8000, function () {
    console.log("listen");
});
