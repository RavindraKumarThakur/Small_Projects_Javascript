const counterDisplay = document.getElementById('show');
const decreaseBtn = document.querySelector('#decrease');
const resetBtn = document.querySelector('#reset');
const increaseBtn = document.querySelector('#increase');
let counter = 0;

decreaseBtn.addEventListener('click',() => {
    counter--;
    counterDisplay.textContent = counter;
    if(counter < 0)
        counterDisplay.style.color = 'red';
    else if(counter > 0)
        counterDisplay.style.color = 'green';
    else
        counterDisplay.style.color = 'rgb(50, 50, 50)';
});

increaseBtn.addEventListener('click',() => {
    counter++;
    counterDisplay.textContent = counter;
    if(counter < 0)
        counterDisplay.style.color = 'red';
    else if(counter > 0)
        counterDisplay.style.color = 'green';
    else
        counterDisplay.style.color = 'rgb(50, 50, 50)';
});

resetBtn.addEventListener('click',() => {
    counter = 0;
    counterDisplay.textContent = counter;
    counterDisplay.style.color = 'rgb(50, 50, 50)';
})