function abs(x) {
    return x > 0 ? x : -x;
}

function foo1(x) {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

function foo2(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

var course = 'javascript';
console.log(window.course);
console.log(course);

//把所有变量和函数绑定到一个全局变量中可减少冲突
var MyApp = {};
MyApp.name = 'app';
MyApp.func = function () {
    console.log(1);
};

function foo3() {
    for (var i = 0; i < 100; i++) {
    }
    i++;//var 声明的变量作用域为函数内部
}

function foo4() {
    for (let i = 0; i < 100; i++) {
    }
    //let 可声明块级作用域的变量
}

const PI = 3.14;//常量，块级作用域

var array = [1, 2, 3];
var [x, y, z] = array;
console.log(x);
console.log(y);
console.log(z);

var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school',
    address: {
        city: 'Beijing',
        street: 'No.1 Road',
        zipcode: '100001'
    }
};
var {name, age, passport} = person;

var {address: {city, zip}} = person;

console.log(city);

function getAge() {
    let y = new Date().getFullYear();
    return y - this.birth;
}

var student = {
    name: '小明',
    birth: 2000,
    age: getAge
};

student.age();
getAge.apply(student, []);
getAge.call(student);

var count = 0;
var oldParseInt = parseInt;
window.parseInt = function () {
    count++;
    return oldParseInt.apply(null, arguments);
};//统计 parseInt 调用次数

function pow(x) {
    return x * x;
}
var arr = [1, 2, 3, 4, 5, 6];
arr.map(pow);//[1, 4, 9, 16, 25, 36]
arr.reduce(function (x, y) {
    return x + y;
});//1 + 2 + 3 + 4 + 5 + 6;
arr.filter(function (x) {
    return x % 2 == 0;
});//[2, 4, 6]
arr.filter(function (element, index, selt) {
    return element % 2 == 0;
});//[2, 4, 6]

arr.sort(function (x, y) {
        return x < y ? 1 : -1;
});//sort 默认按字符串排序，直接修改数组，返回结果仍是当前数组
arr.sort((x, y) => x < y ? 1 : -1);

function* fib(max) {
    var
        t, a = 0, b = 1, n = 1;
    while (n < max) {
        yield a;
        t = a + b;
        a = b;
        b = t;
        n++;
    }
    return a;
}

for (let x of fib(5)) {
    console.log(x);
}