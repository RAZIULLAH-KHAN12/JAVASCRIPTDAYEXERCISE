// function x() {
//     console.log("Namaste");
// }

// function y(x) {
//     return x;;
// }

const radius = [3, 1, 2, 4];
//now we find area of circle of all differnt radius.

// const Area = radius.map((curVal) => {
//     let Area_of_circle = Math.PI * Math.pow(curVal, 2);
//     return Area_of_circle;
// })

// console.log(Area);

const area = function(radius) {
    return Math.PI * Math.pow(radius, 2);
}

const circumfrence = function(radius) {
    return 2*Math.PI *radius;
}

const diameter = function(radius) {
    return 2*radius;
}


const calculate = function(radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumfrence));
console.log(calculate(radius, diameter));


//same we work as map
console.log(radius.map(area));
console.log(radius.map(circumfrence));
console.log(radius.map(diameter));