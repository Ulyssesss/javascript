const crypto = require('crypto');

const hash = crypto.createHash('md5');

hash.update('Hello, md5!');

console.log(hash.digest('hex'));