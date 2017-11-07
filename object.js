console.log(typeof 123);
console.log(typeof NaN);
console.log(typeof 'str');
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof Math.abs);
console.log(typeof null);
console.log(typeof []);
console.log(typeof {});

var now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());//0 - 11
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getTime());

var d = new Date(2015, 5, 19, 20, 15, 30, 0);
d = new Date(1435146562875);
d.toUTCString();
d.toLocaleDateString();

var re1 = /ABC\-001/;
var re2 = new RegExp('ABC\\-001');
re1.test('ABC-001');
'a b   c'.split(/\s+/);

var re3 = /^(\d{3})-(\d{3,8})$/;
re3.exec('010-12345'); // ['010-12345', '010', '12345']

var s = 'JavaScript, VBScript, JScript and ECMAScript';
var re=/[a-zA-Z]+Script/g;

// 使用全局匹配:
re.exec(s); // ['JavaScript']
re.lastIndex; // 10
re.exec(s); // ['VBScript']
re.lastIndex; // 20
re.exec(s); // ['JScript']
re.lastIndex; // 29
re.exec(s); // ['ECMAScript']
re.lastIndex; // 44
re.exec(s); // null，直到结束仍没有匹配到

var person = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};

console.log(JSON.stringify(person));
//第二个参数用于控制如何筛选对象的键值，如果我们只想输出指定的属性，可以传入Array等
console.log(JSON.stringify(person, null, '  '));

function convert(key, value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
}

JSON.stringify(xiaoming, convert, '  ');

person = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    toJSON: function () {
        return {
            'Name': this.name,
            'Age': this.age
        };
    }
};

JSON.parse(JSON.stringify(person));
