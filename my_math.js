const PI = 3.14 // constant set to 3.14
const x = {
    pi:PI,
    add:(x,y) => { return x + y;},
    subtract:(x, y) => { return x - y;},
    multiply:(x, y) => { return x * y;},
    divide:(x, y) => { return x / y;}
}

module.exports = x;