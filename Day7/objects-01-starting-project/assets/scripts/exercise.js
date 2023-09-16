// In this i have creaded file as usuals and elaborated about the various examples about the objects...
// 1) there is one object with 4 key,values then create three new objet from that single object (two object will take one key,value pair from that object and last( third object) take 3rd and 4th key,value pair of that object )       
const studentDetails = {
    fname: 'Raziullah',
    lname: 'khan',
    id: 12345,
    myDetails: function(){
        console.log(`My name is ${this.name} and my id is ${this.id}`);
    }
}

const obj1 = {
    fname: studentDetails.fname, 
}
const obj2 = {
    lname: studentDetails.lname,
    
}
const obj3 = {
    id: studentDetails.id,
    myDetails: studentDetails.myDetails
}
studentDetails.id = 123456;
console.log(obj3.myDetails());

// 2) create dynamic key in object 
const h = "hello";
const r = "platform";

const  a = {
    [h]: "Google",
    [r]: "Instagram",
}
for(let i in a){
    console.log("key "+ i + " value " + a[i]);
}