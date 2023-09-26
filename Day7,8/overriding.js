class Employee {
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
    requestCoffee(x) {
        console.log(`Employee has requested ${x} coffee`);
    }

    requestLeaves(leaves) {
        super.requestLeaves(4);
        console.log("One extra leave granted!");
        // console.log(`Employee has requested ${leaves + 1} (one extra) leaves`);
    }
}

let e = new Programmer();
// let mon = new Monkey('Monkey', 'Orange');
e.login();
e.requestLeaves(4);