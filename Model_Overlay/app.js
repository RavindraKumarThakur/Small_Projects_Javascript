const openBtn = document.querySelector('.btn');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.over_card img');

openBtn.addEventListener('click',function(){
    if(!overlay.classList.contains('show_overlay')){
        overlay.classList.add('show_overlay');
    }
});

closeBtn.addEventListener('click',function(){
    if(overlay.classList.contains('show_overlay')){
        overlay.classList.remove('show_overlay');
    }
});