//Asaync code
const but = document.getElementById('btn2');
const name = function() {
    console.log('Raziullah');
}

setTimeout(name, 2000);

// to change immidiately, but i want to change after some time.

// document.querySelector('h1').innerHTML = "Best ourse of JS";

const textChange = function() {
    document.querySelector('h1').innerHTML = "Best ourse of JS";

}

// this is changer afer 2 senod
// setTimeout(textChange, 2000);

const display = setTimeout(textChange, 2000);

document.querySelector('#btn2').addEventListener('click', function() {
    clearTimeout(display);
    console.log("STOPPED");
})