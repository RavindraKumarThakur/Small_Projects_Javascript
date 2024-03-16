let scrollContainer = document.querySelector('.container');
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');

scrollContainer.addEventListener('wheel',(e) => {
    // e.preventDefault();
    // scrollContainer.scrollLeft += e.deltaY;
    scrollContainer.style.scrollBehavior = 'auto';
})

nextBtn.addEventListener('click',() =>{
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft += 900; 
});

prevBtn.addEventListener('click',() =>{
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft -= 900; 
});
