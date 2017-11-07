'use strict';
var person = {
    name: 'Bob',
    age: 20,
    city: 'beijing',
    'middle-school': 'No.1 Middle School'
};
console.log(person.age);
console.log(person['middle-school']);
person.birth = '2000-01-01';
delete person.birth;
console.log('toString' in person);
person.hasOwnProperty('city');
var str = `aaa
bbb
ccc`;
var length = str.length;
var char = str[2];
var upper = str.toUpperCase();
var arr = [1, 2, 'a', null, true];
arr.indexOf(3);
arr.slice(2, 4);
var arr2 = arr.slice();
arr.push(3, 'b');
arr.pop();
arr.unshift('head add');
arr.shift();//head remove
arr.sort();
arr.reverse();
arr.splice(1, 2, 'd', 'e', 'f');//从索引1开始删除2个元素，并添加3个元素
var arr2 = [1, 1, 1];
var addedArr = arr.concat(arr2);
var arrStr = arr.join(",");
var arrArr = [1, 2, 3, [4, 5, 6]];
if (addedArr.length >= 5) {
    console.log(1);
} else if (addedArr.length >= 2) {
    console.log(2);
} else {
    console.log(3);
}
var i;
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
for (var key in person) {
    console.log(key);
}
while (true) {
    break;
}
var map1 = new Map([[1, 'str'], ['Bob', 70], 'Tracy', '85']);
var map2 = new Map();
map2.set('Adam', 60);
console.log(map1.get('Bob'));
var set1 = new Set([1, 2, 3]);
var set2 = new Set();
set2.add(3);
set2.delete(2);
for (var x of arr) {//for ... in 会遍历 array 的全部索引和属性
    console.log(x);
}
for (var x of set1) {
    console.log(x);
}
for (var x of map1) {
    console.log(x[0] + ' = ' + x[1]);
}
arr.forEach(function (element, index, arrar) {
    console.log(element);
});
arr.forEach(function (element) {//不需要的参数可忽略
    console.log(element);
});
set1.forEach(function (element, sameElement, set) {
    console.log(element);
});
map1.forEach(function (vaule, key, map) {
    console.log(key + ' = ' + vaule);
});