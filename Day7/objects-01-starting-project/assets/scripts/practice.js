const movieList = document.getElementById('movie-list');

movieList.style['background-color'] = 'orange';
movieList.style.display = 'block';


const userChosenKeyName = 'level';

const person = {
    'first name':'Max',
    age: 30,
    [userChosenKeyName]: '....', //dynamically set
    hobbies: ['Sports', 'Cooking'],
    greet: function(){
        alert('Hi there!')
    },
    1.5: 'hello'
};

person.isAdmin = true;  //--> Adding property
// person.age = 31; //--> modifying property
 delete person.age;  //--> deleting property
//  person.age = undefined;
//  person.age = null; 
console.log(person);
console.log(person['first name']);
console.log(person[1.5]);

const keyName = 'first name';
console.log(person[keyName]);  //dynamically Access

