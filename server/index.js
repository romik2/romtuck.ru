var http = require('http');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sql.local');
var express = require('express');
var app = express();

function getDataAll(res, name) {
    db.serialize(() => {
        db.all(`SELECT * FROM ${name}`, (err, row) => {
            res.write(JSON.stringify({'table': `${name}`, 'row': row}));
            res.end();
        });
    });
}

app.get('/api/work', function (req, res) {
    getDataAll(res, 'work');
});

app.get('/api/education', function (req, res) {
    getDataAll(res, 'education');
});

app.get('/api/experience', function (req, res) {
    getDataAll(res, 'experience');
});

app.get('/api/certificate', function (req, res) {
    getDataAll(res, 'certificate');
});

http.createServer(app).listen(8080)
