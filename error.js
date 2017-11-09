var r1, r2, s = null;
try {
    r1 = s.length;
    r2 = 100;
} catch (e) {
    alert('出错了：' + e);
} finally {
    console.log('finally');
}
console.log('r1 = ' + r1);
console.log('r2 = ' + r2);

throw new Error('error');