const createBtn = document.querySelector('.newNote');
const notesContainer = document.querySelector('.notes-container');
let allNotes = document.querySelectorAll('.content');
let newContainer;
let deleteIcon;

showData();
console.log(localStorage.getItem('Data'));

createBtn.addEventListener('click',() => {
    newContainer = document.createElement('p');
    newContainer.classList.add('content');
    newContainer.contentEditable = 'true';
    deleteIcon = document.createElement('img');
    deleteIcon.classList.add('delete')
    deleteIcon.src = 'images/delete.png';
    newContainer.appendChild(deleteIcon);
    notesContainer.appendChild(newContainer);
    console.log(localStorage.getItem('Data'));
});

notesContainer.addEventListener('click',function(e){
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
        saveData();
        console.log(localStorage.getItem('Data'));
    }
})

notesContainer.addEventListener('keydown',(e) => {
    if(e.key === 'Enter'){
        document.execCommand('insertLineBreak');
        e.preventDefault();
    }
    saveData();
    console.log(localStorage.getItem('Data'));
})

function saveData(){
    localStorage.setItem('Data',notesContainer.innerHTML);
}
saveData();

function showData(){
    notesContainer.innerHTML  = localStorage.getItem('Data');

}
