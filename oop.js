var Bird = {
    name: 'name',
    run: function () {
        console.log(this.name + ' is running...');
    }
}

function createBird(name) {
    var bird = Object.create(Bird);
    bird.name = name;
    return bird;
}

var bird1 = createBird('bird1');
bird1.run();


function Student(name) {
    this.name = name;
    this.hello1 = function () {
        console.log('hello, ' + this.name);
    }
}

Student.prototype.hello2 = function () {
    console.log('hello, ' + this.name);
};


var jack = new Student('Jack');
jack.hello1();
jack.hello2();