class Employee {

    constructor(name){
        console.log(`${name} Employee constructor is here`);
        this.name = name;
    }

    login() {
        console.log(`Employee has logged in`);
    }

    logout() {
        console.log(`Employee has logged out`);
    }

    requestLeaves(leaves) {
        console.log(`Employee has requested ${leaves} leaves`);
    }
}

class Programmer extends Employee {

    constructor(name){
        super(name)
        console.log(`${name} Programmer constructor is here`);
    }
    // constructor(...args) {  // if there is no constructor in the child class it is created automatically
    //     super(...args)
    // }

    requestCoffee(x) {
        console.log(`Employee has requested ${x} coffee`);
    }

    requestLeaves(leaves) {
        super.requestLeaves(4);
        console.log("One extra leave granted!");
        // console.log(`Employee has requested ${leaves + 1} (one extra) leaves`);
    }
}

let e = new Programmer('Ravi');
// let mon = new Monkey('Monkey', 'Orange');
// e.login();
// e.requestLeaves(4);