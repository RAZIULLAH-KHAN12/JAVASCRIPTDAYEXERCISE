/*1) write a program to reverse string of given string ex. "Hello World" */       

// let a = "Hello World";
// let b = a.split('');
// console.log(b);
// let c = b.reverse();
// console.log(c);
// let d = c.join("");
// console.log(d);

function reverseString(str) {
    return str.split('').reverse().join('');
}
let s = "Hello World";
console.log(reverseString(s));

/*2) write a program create a new string without the first and last character of a given string */ 
let string = "Javascript";
let result = string.substring(1,string.length-1);
console.log(result); 
