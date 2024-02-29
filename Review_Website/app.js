const profilePicture = document.getElementById('profilePicture');
const nameDisplay = document.querySelector('.name');
const profile = document.querySelector('.profile');
const description = document.querySelector('.description');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// local reviews data
const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'images/pexels_andrea.jpg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'images/pexels_jack.jpg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'images/pexels_pixabay.jpg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'images/pexels-spencer-selover-428364.jpg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    }
];

let currentIndex = 0;

function setData(){
    profilePicture.img = reviews[currentIndex].img;
    nameDisplay.textContent = reviews[currentIndex].name;
    profile.textContent = reviews[currentIndex].job;
    description.textContent = reviews[currentIndex].text;
};

setData();

prevBtn.addEventListener('click',() => {
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = reviews.length - 1;
    }
    setData();
});

nextBtn.addEventListener('click',() => {
    currentIndex++;
    if(currentIndex > reviews.length - 1){
        currentIndex = 0;
    }
    setData();
});

randomBtn.addEventListener('click',() => {
    currentIndex = Math.floor(Math.random() * reviews.length);
    setData();
})