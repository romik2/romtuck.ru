const WebSocket = require('ws');
const wsServer = new WebSocket.Server({port: 4567});

wsServer.on('connection', function (client, req) {
    console.log('Новый пользователь');
    console.log(req.socket.remoteAddress);
    setInterval(function () {
        client.send("ddd");
    }, 6000);

    client.on('close', function() {
        console.log('Пользователь отключился');
    })
});