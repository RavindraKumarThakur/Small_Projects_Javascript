const body = document.getElementById('body');
const color = document.querySelector('.color_value');
const button = document.querySelector('.btn');

const array = ['red','green','blue','rgb(214 13 142)','#3ba79d'];

button.addEventListener('click',() => {
    const randomColor = randomColors();
    color.textContent = array[randomColor];
    body.style.backgroundColor = array[randomColor];
});

function randomColors(){
    return Math.floor(Math.random() * array.length);
}