function add(num1, num2) { //proper function
    return num1 + num2;
}

console.log(add(1, 5)); // 6
console.log(add(12, 15)); //  27

function addRandom(num1) { //improper function
    return num1 + Math.random();
}

console.log(addRandom(5));

console.log(addRandom(7)); 

let previousResult = 0;

function addMoreNumbers(num1, num2) {
    const sum = num1 + num2;
    previousResult = sum;
    return sum;
}

console.log(addMoreNumbers(1, 5));

const hobbies = ['Sports', 'Cooking'];

function printHobbies(h) {
    h.push('NEW HOBBY');
    console.log(h);
}

printHobbies(hobbies);

//Factory function
function createTaxCalculator(tax) {
    function calculateTax(amount) {
        return amount * tax; //tax we can use inside a function
    }

    return calculateTax;
}
// function calculateTax(amount, tax) {
//     return amount * tax;
// }

// const vatAmount = calculateTax(100, 0.19);
// const incomeTax = calculateTax(100, 0.25);
const calculateVatAmount = createTaxCalculator(0.19);
const calculateincomeTaxAmount = createTaxCalculator(0.25);
console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));


//Closures.
// function x() {
//     let b = 10;
//     function y() {
//         console.log(b);
//     }
//     return y;
// }
// x();

// let a = x();
// console.log(a);
// a();


//ex2
function z() {
    let b = 10;
    function x() {
        var a = 7;
        function y() {
            console.log(a,b);
        }
        y();
    }
    x();
}
z(); // 10,7

//Closere and memory management.
let userName = 'Max';

function greetUser() {
    console.log('Hi ' + name);
}

let name = 'Maximilian';

userName = 'Manuel';

greetUser(); //Maximilian

