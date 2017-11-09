function log(str) {
    console.log(str);
}
log(window.innerHeight + ", " + window.innerWidth);

log(navigator.appName + '\n'
    + navigator.appVersion + '\n'
    + navigator.language + '\n'
    + navigator.platform + '\n'
    + navigator.userAgent + '\n');

log(screen.width + ', ' + screen.height + ', ' + screen.colorDepth);

log(location.href);
log(location.host);
log(location.protocol + '//' + location.host + location.pathname + location.search + location.hash);

log(document.title);

let test = document.getElementById('test');
if (test !== null) {
    test.innerHTML = '<h1>aaa</h1>'
    test.style.backgroundColor = 'red';
    let p = document.createElement('p');
    p.innerText = 'append p';
    test.appendChild(p);
    test.removeChild(test.children[0]);
}

log(document.cookie);

history.forward();
history.back();

var request = new XMLHttpRequest();//new ActiveXObject('Microsoft.XMLHTTP'); IE

request.onreadystatechange = function () {
    if (request.readyState === 4) {
        if (request.status === 200) {
            log('success');
        } else {
            log('fail');
        }
    } else {
        log('...');
    }
};

// request.open('GET', '/');
// request.send();
//
// log('请求已发送，请等待响应...');


function testPromise(resolve, reject) {
    let r = Math.random() * 2;
    log('start promise: ' + r);
    if (r > 1) {
        resolve('success: ' + r);
    } else {
        reject('fail: ' + r);
    }
}

new Promise(testPromise).then(function (result) {
    log(result);
}).catch(function (result) {
    log(result);
});

let canvas = document.getElementById('test-canvas');
let ctx = canvas.getContext('2d');