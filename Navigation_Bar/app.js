const toggleBtn = document.querySelector('.toggle');
const menuOptions = document.querySelector('.menu-small');
const menuDiv = document.querySelector('.menu-small-after');


toggleBtn.addEventListener('click',() => {
    if(menuOptions.classList.contains('menu-small-click')){
        menuOptions.classList.remove('menu-small-click');
        menuDiv.classList.remove('menu-small-click');
    }else{
        menuOptions.classList.add('menu-small-click');
        menuDiv.classList.add('menu-small-click');
    }

});