class Animal1 {
    constructor(name) {
        this.name = Animal1.capitalize(name);
    }

    walk() {
        console.log("Animal1 " + this.name + " is walking")
    }

    static capitalize(name) {
        return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }
}

let a = new Animal1('jack');
a.walk();
// console.log(a.capitalize('om'));  // this does not work