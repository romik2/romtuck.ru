const WebSocket = require('ws');
const fs = require('fs');
const https = require('https');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sql.local');
const tablesName = ['work', 'education', 'experience', 'certificate'];
const config = require('./config.json');

if (config.protocol == 'wss') {
    const server = https.createServer({
        cert: fs.readFileSync(`${config.ssh_dirname}`),
        key: fs.readFileSync(`${config.ssh_dirname}`),
        ca: fs.readFileSync(`${config.ssh_dirname}`)
    });
    const wsServer = new WebSocket.Server({ server, port: config.port});

    wsServer.on('connection', function (client, req) {
        console.log(`Новый пользователь: ${req.socket.remoteAddress}`);
    
        sendMessages(client);
        
        setInterval(function () {
            sendMessages(client)
        }, 6000);
    
        client.on('close', function() {
            console.log(`Пользователь отключился: ${req.socket.remoteAddress}`);
        })
    });
} else {
    const wsServer = new WebSocket.Server({port: config.port});

    wsServer.on('connection', function (client, req) {
        console.log(`Новый пользователь: ${req.socket.remoteAddress}`);
    
        sendMessages(client);
        
        setInterval(function () {
            sendMessages(client)
        }, 6000);
    
        client.on('close', function() {
            console.log(`Пользователь отключился: ${req.socket.remoteAddress}`);
        })
    });
}

function sendMessages(client) {
    tablesName.forEach(name => {
        db.serialize(() => {
            db.all(`SELECT * FROM ${name}`, (err, row) => {
                client.send(JSON.stringify({'table': `${name}`, 'row': row}));
            });
        });
    });
}