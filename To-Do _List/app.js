const subBtn = document.querySelector('.btn');
const task = document.querySelector('.insert input');
const list = document.querySelector('ul');
const listcontainer = document.getElementById('list-container');
let list_item;

subBtn.onclick = function(){
    if(task.value){
        list_item = document.createElement('li');
        list_item.innerHTML = task.value;
        const close = document.createElement('span');
        close.innerHTML = '&times;'
        list_item.appendChild(close);
        list.appendChild(list_item);
    }else{
        alert(`Task can't be empty!!!`);
    }
    task.value = "";
    saveData();
};

list.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('selected');
        saveData();
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem('Data',listcontainer.innerHTML);
}

function getData(){
    listcontainer.innerHTML = localStorage.getItem('Data');
}

getData();