/*1) write a program create car class and properties like name,model,weight,color and method start(),drive(),brake(),stop()*/       

class Car {
    constructor(name, model, weight, color) {
        this.name = name;
        this.model = model;
        this.weight = weight;
        this.color = color;
    }
    

    start(){

    }
    
    drive() {

    }
    
    brake() {

    }

    stop() {

    }
}
/*2) Write a program to get the volume of a Cylinder with four decimal places using object classes. */

class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    volume() {
        return "The volume of cylinder is "+(Math.PI*Math.pow(this.radius, 2) * this.height).toFixed(4);
    }
}

const vol = new Cylinder(5,7);
console.log(vol.volume());
/*3) Write a program gather and display infromation from an object like the reading status (i.e. display book name, author name and reading status) of books and check book are reading or not in console.*/

class Book {
    constructor(bookName, autherName, readingStatus) {
        this.bookName = bookName;
        this.autherName = autherName;
        this.readingStatus = readingStatus;
    }
    
    diplayInfo() {
        console.log(`Book name: ${this.bookName}`);
        console.log(`Auther name: ${this.autherName}`);
        console.log(`Book status: ${this.readingStatus ? 'book are reading' : 'book are not reading'}`);
    }
}

const book1 = new Book('Gitanjali', 'Rabindranath Tagore', true);
const book2 = new Book('The Discovery of India', 'Jawaharlal Nehru', true);
const book3 = new Book('Geeta Rahasya', 'Lokmanya Balgangadhar Tilak', false);
const book4 = new Book('Arthashastra', 'Chanakya', false);

const bookArray = [book1, book2, book3, book4];

bookArray.forEach(book => book.diplayInfo());
