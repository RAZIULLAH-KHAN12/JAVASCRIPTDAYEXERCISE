// const ids = new Set(['1', '2', '3']); //--collection of unique value
// console.log(ids.has(1));
// if(ids.has('1')){
//     ids.delete('1');
// }

// for(const entry of ids.entries()){
//     console.log(entry[0]);
// }


///###Map
// const person1 = {name: 'Max'};
// const person2 = {name: 'Manuel'};

// const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]]);

// personData.set(person2, [{date: 'two weeks ago', price: 100}]);

// console.log(personData);
// console.log(personData.get(person1));
  
// for(const [key, value] of personData.entries()){
//     console.log(key, value);
// }

// for(const key of personData.keys()){
//     console.log(key);
// }

// for(const value of personData.values()){
//     console.log(value);
// }

// console.log(personData.size);


//### WeakSet
const person = {name: 'Max'};
const persons = new WeakSet(); 
persons.add(person);

//...some operations
person == null;

console.log(persons);

//### WeakMap
const personD = new WeakMap();
personD.set(person, 'Extra info!');

person == null;

console.log(personD);