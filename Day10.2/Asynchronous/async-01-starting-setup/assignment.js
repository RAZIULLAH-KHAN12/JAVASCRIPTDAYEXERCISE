// this work as similar setTimeout but one differerence is he is continue running.

const btn1 =  document.querySelector('#btn1') 
const btn2 =  document.querySelector('#btn2')

function displayHello() {
    console.log('hello')
  }
const sayDate = function(str) {
    console.log(str, Date.now());
}
const stop = setInterval(sayDate, 1000, 'Hi');
const intId = ()=>{
    var a = setInterval(sayDate, 1000, 'Hi');
}
const stopInterval = ()=>{
    clearInterval(intId);
}
btn1.addEventListener('click',() => {
    intId;
});
btn2.addEventListener('click',() => 
clearInterval(intId));
