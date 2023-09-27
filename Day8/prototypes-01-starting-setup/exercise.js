/*1) write a program create multiple objects with constructor function.*/
function Students(fname, lname, age) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;
}

const stu1 = new Students("Rahul", "Verma", 27);
const stu2 = new Students("Ram", "Kumar", 20);
const stu3 = new Students("Max", "Well", 30);
const stu4 = new Students("Kane", "Williamson", 35);
// console.log(stu1);

/*2) write a program create a constructor function with parameter and create object and accessing properties.*/
function Employee(fname, lname, age) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;
}
const emp1 = new Employee("Rahul", "Verma", 27);
const emp2 = new Employee("Ram", "Kumar", 20);
const emp3 = new Employee("Max", "Well", 30);
const emp4 = new Employee("Kane", "Williamson", 35);

console.log(emp1.age);

/*3) write a program create a constructor function using a prototype. */

//create constructor function
function Person(fname, lname, age) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;
}

//Add method using prototype constructor

Person.prototype.method = function () {
  console.log(`My name is ${this.fname} and I am ${this.age} old`);
};

//create object of person constructor
const p1 = new Person("Raziullah", "Khan", 27);
const p2 = new Person("Ram", "Kumar", 20);

//print whole object
console.log(p1);
//Access the properties
p1.method();
