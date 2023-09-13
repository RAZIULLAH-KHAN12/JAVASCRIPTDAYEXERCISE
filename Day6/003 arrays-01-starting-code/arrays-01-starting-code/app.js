// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers =  Array(5,2);
// // console.log(moreNumbers);

// // const yetMoreNumbers =  Array.of(5,2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems =  Array.from(listItems);
// console.log(arrayListItems);

// //same type data in array
// const hobbies = ['Cooking', 'Sports'];
// //Mised type data in an Array
// const personalData = [30, 'Max', {moreDetail: []}];

// //multidimensional Array
// const analyticsData = [[1, 1.6], [-5.4, 2.1]];
// for(const data of analyticsData){
//     for(const dataPoints of data){
//          console.log(dataPoints)
//     }
// }

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push("Reading");
// hobbies.unshift("Coding");
// hobbies.pop();
// hobbies.shift(); 
// console.log(hobbies);

// //we can change the value of an array
// hobbies[1]="Coding";
// // hobbies[5]="Running";

// hobbies.splice(1,0,'Good Food');
// console.log(hobbies);

// hobbies.splice(0,1);
// console.log(hobbies);

// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// // console.log(testResults.slice(2,4));
// const storedResults = testResults.concat([10,20]);
// testResults.push(40);
// console.log(storedResults);

// console.log(testResults.includes(10.99,1));
// console.log(testResults.indexOf(10.99,1) !== -1);

// const personalData = [{name: 'Max'}, {name: 'Manuel'}];
// console.log(personalData.indexOf({name: 'Manuel' }));

// const manuel = personalData.find((person, idx, persons) =>{
//     return person.name === 'Manuel';
// }); console.log(manuel);
// manuel.name = 'Anna';
// console.log(manuel,personalData);

// const maxIndex = personalData.findIndex((person, idx, persons) =>{
//     return person.name === 'Manuel';
// });

// console.log(maxIndex);

// ###forEach callback Array method.
// const prices = [10.99, 5.99, 3.99, 6.59];
// console.log(prices);
// const tax = 0.19;
// const taxAdjustedPrices = [];

// for(const price of prices){
//     taxAdjustedPrices.push(price * (1 + tax));
// }

// prices.forEach((price,idx,prices) => {
//     const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)}
//     taxAdjustedPrices.push(priceObj);
// });
// console.log(taxAdjustedPrices);


//###map() callback Array method. --> it returns new array
// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// const taxAdjustedPrices = prices.map((price,idx,prices) => {
//         const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)}
//         return priceObj;
// });
// console.log(prices,taxAdjustedPrices);

//###.sort() -- is is sort the original array
// const prices = [10.99, 5.99, 3.99, 6.59];
// const sortedPrices = prices.sort((a,b) => {
//     if(a > b) {
//         return 1;
//     } else if (a === b){
//         return 0;
//     } else {
//         return -1;
//     }
// });
// console.log(sortedPrices);
// console.log(sortedPrices.reverse());
// console.log(prices);

//###.flter() method.
// const filteredArray = prices.filter(value => value > 6);
// console.log(filteredArray);

//### .reduce() -->Return a single value
// let sum = 0;

// prices.forEach(value => {
//     sum += value;
// });
// console.log(sum);

// const sum = prices.reduce((prevValue,curValue, curIndex, array) => {
//     return prevValue + curValue; 
// }, 0);
// console.log(sum);
// //### Arrays and Strings-split() and join()
// const data = 'new york;10.99;2000';
// const transformedData = data.split(';');
// transformedData[1] = +transformedData[1];
// console.log(transformedData);

// const nameFragements = ['Max', 'Schwarz'];
// const name = nameFragements.join(' ');
// console.log(name);

//#### Spread Operator
// const elements = [...nameFragements];
// nameFragements.push('Mr');
// console.log(nameFragements, elements);

// console.log(Math.min(...prices));

// const persons = [{name: 'Max', age: 30}, {name: 'Manuel', age: 31}];
// const copiedPersons = persons.map(person => ({
//     name: person.name,
//     age: person.age
    
// }));

// persons.push({name: 'Anna', age: 29});
// persons[0].age = 31;

// console.log(persons, copiedPersons);

//### Understanding Array Destructuring
const nameData = ['Max', 'Schwarz', "Good", 1,2,3,4];
// const firstName = nameData[0];
// const lastName = nameData[1];
// console.log(firstName,lastName);

const [firstName, lastName, ...other] = nameData;
console.log(firstName,lastName,other);