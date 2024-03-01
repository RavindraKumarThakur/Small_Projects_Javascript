const toggle = document.querySelector('.toggle_btn');
const drawer = document.querySelector('.drawer');
const crossBtn = document.querySelector('.close-btn');

toggle.addEventListener('click',() => {
    if(drawer.classList.contains('show_drawer')){
        drawer.classList.remove('show_drawer');
    }
    else{
        drawer.classList.add('show_drawer');
    }
});

crossBtn.addEventListener('click',() => {
    drawer.classList.remove('show_drawer');
})