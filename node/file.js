'use strict';

let
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

let root = path.resolve('.');

console.log('Static root dir: ' + root);

var server = http.createServer(function (request, response) {

    let pathname = url.parse(request.url).pathname;
    let filePath = path.join(root, pathname);
    fs.stat(filepath, function (err, stats) {
        if (!err && stats.isFile()) {
            console.log('200 ' + request.url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        } else {
            console.log('404 ' + request.url);
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');