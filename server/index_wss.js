const fs = require('fs');
const https = require('https');
const WebSocket = require('ws');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sql.local');
const tablesName = ['work', 'education', 'experience', 'certificate'];

const server = https.createServer({
  cert: fs.readFileSync('./cert.pem'),
  key: fs.readFileSync('./key.key')
}, (req, res) => {
  console.log("Request");
  res.end("Nice");
});

const wss = new WebSocket.Server({ server });

wss.on('connection', function (client, req) {
    console.log(`Новый пользователь: ${req.socket.remoteAddress}`);

    sendMessages(client);
    
    setInterval(function () {
        sendMessages(client)
    }, 6000);

    client.on('close', function() {
        console.log(`Пользователь отключился: ${req.socket.remoteAddress}`);
    })
});

function sendMessages(client) {
    tablesName.forEach(name => {
        db.serialize(() => {
            db.all(`SELECT * FROM ${name}`, (err, row) => {
                client.send(JSON.stringify({'table': `${name}`, 'row': row}));
            });
        });
    });
}

server.listen(4568);