// class AgedPerson {
//     printAge() {
//         console.log(this.age);
//     }
// }
class Person {
    name = 'Max';

    constructor() {
        // super();
        this.age = 30;
    }

    greet= () =>{
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
    }


    //use bind
    // greet= function() {
    //     console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
    // }

    // greet(){
    //     console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
    // }
}

// const person = new Person();
// console.log(person);

// function Person() {
//     this.age = 30;
//     this.fname = 'Max';
//     this.lname = 'David';
//     // this.greet = function() {
//     //     console.log(`Hi, I am ${this.fname} and I am ${this.age} years old`);
//     // }    
// }

// Person.prototype.greet = function() {
//     console.log(`Hi, I am ${this.fname} and I am ${this.age} years old`);
// }   


// Person.prototype = {
//     printAge() {
//         console.log(this.age);
//     }
// }

//Adding some properties
// p.fullName = function() {
//     return this.fname + " " + this.lname;
// }
// Person.prototype.printAge= function() {
//     console.log(this.age);
// }

// console.dir(Person);

// const p = new Person();
// p.greet();
// p.printAge();
// console.log(p.__proto__);
// console.log(p.toString());

// const p2 = new p.age.__proto__.constructor();
// console.log(p2);

// const p = new Person();
// const p2 = new Person();
// console.log(p)
// p.greet();
// console.log(p2.__proto__ === p.__proto__); 

// const button = document.getElementById('btn')
// button.addEventListener('click', p.greet.bind(p));

const course = { //new object()
    title: 'JavaScript - The Complete Guide',
    rating: 5
};

// console.log(course.__proto__);
// console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {
    printRating: function(){
        console.log(`${this.rating}/5`);
    }
});

const student = Object.create({
    printProgress: function() {
        console.log(this.progress);
    }, 
}, {
    name: {
        configurable: true,
        enumerable: true,
        value: 'Max',
        writable: true
    }
});

//adding property in an object
//  student.name = 'Max';

 Object.defineProperty(student, 'progress' ,{
    configurable: true,
    enumerable: true,
    value: 0.8,
    writable: false
 })
console.log(student.progress);
console.log(student);
console.log(Object.keys(student).length);
course.printRating(); //get error  
console.log(course);