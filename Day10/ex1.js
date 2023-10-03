/*1) write a program to calculate add,sub,div,mul of two input from users.*/  

// let a = parseInt(prompt('Enter number 1 : ',0));
// let b = parseInt(prompt('Enter number b : ',0));

// function add(a,b) {
//     return `The sum of ${a} and ${b} is: ${a+b}`;
// }
// function sub(a,b) {
//     return `The sub of ${a} and ${b} is: ${a-b}`;
// }
// function mul(a,b) {
//     return `The mul of ${a} and ${b} is: ${a*b}`;
// }
// function div(a,b) {
//     return `The div of ${a} and ${b} is: ${a/b}`;
// }

// function calculate(a, b, fun) {
//     return fun(a,b);
// }

// console.log(calculate(a,b,add));
// console.log(calculate(a,b,sub));
// console.log(calculate(a,b,mul));
// console.log(calculate(a,b,div));

/*2) How to run a function when the page is loaded in JavaScript*/

// window.onload = function() {
//     alert('Page is Loaded');
// }

// document.addEventListener('DOMContentLoaded', function() {
//     alert('Hellow world!');
// });

/*3) When you leave the input field, a function is triggered which transforms the input text to upper case. Ex. like enter user hello change the tab output shuld be "HELLO" */ 

// var inputElement = document.getElementById('myInput');
// var button = document.getElementById("btn");
// var userInput = inputElement.value;
// var uppercaseText = userInput.toUpperCase();

// button.addEventListener('click', function() {
//     console.log(uppercaseText);
// });

/*4) Press and hold down a key inside the text field to set a red background color. Release the key to set a green background color */ 

// var inputElement = document.getElementById("myInput1");

// inputElement.addEventListener("keydown", function() {
//     inputElement.style.backgroundColor = "red";
// });

// inputElement.addEventListener("keyup", function() {
//     inputElement.style.backgroundColor = "green";
// });

// inputElement.addEventListener("blur", function() {
//     inputElement.style.backgroundColor = "white";
// });



/*5) when a user selects dropdown value. ex. dropdown value like Java,PHP,Angular when select java then alert message like "select language is java"  */ 

var selectElement = document.getElementById("myDropdown");


selectElement.addEventListener("change", function() {

    var selectedValue = selectElement.value;
    alert("Selected language is " + selectedValue);
});