console.log("Exercise Day 4!");
const calculate = function mySquare(input,callback){
    return callback(input);
};

function square(input){
    return `The given input is ${input} and the square is ${input*input}`;
}
const result = calculate(5,square);
console.log(result);