// 1) write a program following pattern.
// *                           
// * *  
// * * *  
// * * * *  
// * * * * *   

// const row = 5;
// for(let i = 1; i <= row; i++){
//     for(let j = 1; j <= i; j++){
//         process.stdout.write("*");
//     }
//     console.log();
// }

// 2) Find the sum of all elements of a given array? Ex. like arr = [1, 6, 17, 70, 85];    
// const a = [1, 6, 17, 70, 85];
// const s = a.reduce((sum,val)=>{
//     return sum +=val;
// },0);
// console.log(s);

// 3)  Create an array of numbers (of your choice) and perform three array
//         operations on it: filter for numbers greater than 5, map every number to
//         an object which holds the number on some property (e.g. "num") and
//         reduce the array to a single number (the multiplication of all numbers). 

const arr = [10, 1, 12, 3, 14, 5, 16, 2, 18, 19];

// const arrFilter = arr.filter((curValue) => {
//     return curValue > 5;
// });
// console.log(arrFilter);

// const arrMap = arr.map(num => ({num}));
// console.log(arrMap);

// const arrReduce = arr.reduce((mul,curValue) => {
//     return mul*curValue;
// });
// console.log(arrReduce);


// 4)     Write a function ("findMax") which executes some logic that finds the
//         largest number in a list of arguments. Pass the array from task 1 split
//         up into multiple arguments to that function.

// function findMax(...arguments){
//     return Math.max(...arguments);
// }
// console.log(findMax(...arr));

// function findMax(number){
//     let max = number[0];

//     for(let i = 0; i< number.length-1; i++){
//         if(number[i]>max){
//             max=number[i];
//         }
//     }
//     return max;
// }
// const max = findMax(arr);
// console.log(`The maximum number is ${max}`);

// 5)     Tweak the "findMax" function such that it finds both the minimum and
//         maximum and returns those as an array. Then use destructuring when
//         calling the function to store the two results in separate constants.

// function findMaxMin(number){
//     let max = number[0];
//     let min = number[0];

//     for(let i = 0; i< number.length-1; i++){
//         if(number[i]>max){
//             max=number[i];
//         }
//         if(number[i]<min){
//             min=number[i];
//         }
//     }
//     return [max,min];
// }
// const [max,min] = findMaxMin(arr);
// console.log(`The maximum number is ${max}`);
// console.log(`The maximum number is ${min}`);

// 6)     Create a list (and possibly some surrounding logic) where you ensure
//         that NO duplicate values can be added. Use whichever approach seems
//         appropriate to you.  

// const list = new Set([1,2,3,4,5,6,4]);
// list.add(1);
// console.log(list);