/*1) create two class FrontEnd and BackEnd which are based on WebDev class, both have some common properties and one same method printLanguage(which will print used langguage like FrontEnd -> javscript, BackEnd -> .NET) and some additional different  function     needMODIFY */


class FrontEnd {
    constructor(name,lang) {
        this.lang = lang;
        this.name = name;
    }
    name;
    no;
    printLanguage() {
        console.log(this.lang);
    }
    getName() {
        console.log(this.name);
    }
}

class BackEnd {
    constructor(no,lang) {
        this.lang = lang;
        this.no = no;
    }
    name;
    no;
    printLanguage() {
        console.log(this.lang);
    }
    getNo() {
        console.log(this.no);
    }
}

const f = new FrontEnd('Rahul', 'javascript');
const b = new BackEnd(512,'.NET');
f.printLanguage();
f.getName();
b.printLanguage();
b.getNo();

