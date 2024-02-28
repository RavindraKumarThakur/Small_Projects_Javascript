const body = document.getElementById('body');
const color = document.querySelector('.color_value');
const button = document.querySelector('.btn');

const array = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

button.addEventListener('click',() => {
    let randomColor = '#';
     for(let i =0; i < 6; i++){
        randomColor += array[randomColors()];
     }
    color.textContent = randomColor;
    body.style.backgroundColor = randomColor;
});

function randomColors(){
    return Math.floor(Math.random() * array.length);
}