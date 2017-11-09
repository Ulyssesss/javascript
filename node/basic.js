'use strict';

function log(str) {
    console.log(str)
}

let process = global.process;
log(process.version);
log(process.platform);

let fs = require('fs');
fs.readFile('test1', 'utf-8', function (error, data) {
   if (error) {
       log(error);
   }  else {
       log(data)
   }
});

try {
    let data = fs.readFileSync('test1', 'utf-8');
    log(data);
} catch (err) {
    log(err)
}

fs.writeFile('test1', 'Hello, Node.js', function (err) {
    if (err) {
        log(err);
    } else {
        log('ok');
    }
});

fs.stat('test1', function (err, stat) {
    if (err) {
        log(err);
    } else {
        log('isFile: ' + stat.isFile());
        log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            log('size: ' + stat.size);
            log('birth time: ' + stat.birthtime);
            log('modified time: ' + stat.mtime);
        }
    }
});


let rs = fs.createReadStream('test1', 'utf-8');

rs.on('data', function (chunk) {
    log('DATA:')
    log(chunk);
});

rs.on('end', function () {
    log('END');
});

rs.on('error', function (err) {
    log('ERROR: ' + err);
});


let ws = fs.createWriteStream('test2', 'utf-8');
ws.write('使用Stream写入文本数据...');
ws.write('END');
ws.end();

ws = fs.createWriteStream('test2', 'utf-8');
rs.pipe(ws);