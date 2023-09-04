//1) Click button to open a new window "Hello world".

// const button = document.querySelector('button');
// button.addEventListener('click', () =>{
//     alert("Hello world");
// });
//2) create  one div in html and add three paragraphs with different colour in that div by only using javascript              
const div = document.querySelectorAll('p');
console.log(div);
div[0].style.backgroundColor = 'red';
div[1].style.backgroundColor = 'yellow';
div[2].style.backgroundColor = 'green';

// for (const iterator of div) {
//     iterator[0].style.backgroundColor = 'red';
// }