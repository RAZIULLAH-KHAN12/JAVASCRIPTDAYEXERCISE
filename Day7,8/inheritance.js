class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    run(){
        console.log(this.name + ' is running!');
    }

    shout(){
        console.log(this.name + ' is shouting!');
    }

    // hide() {
    //     console.log(`${this.name} is hiding and color is ${this.color}`);
    // }
}

class Monkey extends Animal {
    eatBanana() {
        console.log(this.name + ' is eating banana');
    }

    hide() {
        console.log(`${this.name} is hiding and color is ${this.color}`);
    }
}

let ani = new Animal('COW', 'White');
let mon = new Monkey('Monkey', 'Orange');
ani.shout();
mon.eatBanana();
mon.hide();
ani.hide();