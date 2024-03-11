const questions = [
    {
        question: "Which is the largest animal in the world?",
        answer: [
            {text:"Shark", correct:"false"},
            {text:"Blue Whale", correct:"true"},
            {text:"Elephant", correct:"false"},
            {text:"Giraffe", correct:"false"}
        ]
    },
    {
        question: "Which is the Smallest country in the world?",
        answer: [
            {text:"Vatican city", correct:"true"},
            {text:"Bhutan", correct:"false"},
            {text:"Nepal", correct:"false"},
            {text:"Shri Lanka", correct:"false"}
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answer: [
            {text:"Kalahari", correct:"false"},
            {text:"Gobi", correct:"false"},
            {text:"Sahara", correct:"false"},
            {text:"Antarctica", correct:"true"}
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answer: [
            {text:"Asia", correct:"false"},
            {text:"Australia", correct:"true"},
            {text:"Arctic", correct:"false"},
            {text:"Africa", correct:"false"}
        ]
    }
]

const question = document.querySelector('.question h2');
const option_block = document.querySelector('.options');
const nextBtn = document.querySelector('.next-btn');
const title = document.querySelector('.card h1');
let currentQuestionIndex = 0;
let score = 0;

function setQuestion(){
    resetBtn();
    if(currentQuestionIndex < questions.length){
        const displayQuestion =  questions[currentQuestionIndex].question;
        const question_num = currentQuestionIndex + 1;
        let showOption;
        question.innerHTML = question_num + '. ' + displayQuestion;
        questions[currentQuestionIndex].answer.forEach(options = (options) => {
            showOption = document.createElement('button');
            showOption.classList.add('btn');
            showOption.innerHTML = options.text;
            option_block.appendChild(showOption);
            // console.log(options.correct)
            if(options.correct == 'true'){
                showOption.dataset.correct = options.correct;
            }
            showOption.addEventListener('click',checkAnswer);
        })
        currentQuestionIndex++;
    }else{
        question.innerHTML = `You scored ${score} out of ${questions.length}`;
        nextBtn.style.display = 'block'
        nextBtn.innerHTML = 'Play again'
        currentQuestionIndex = 0;
        score = 0;
    }
}

nextBtn.addEventListener('click',nextquestion);

function nextquestion(){
    if(currentQuestionIndex < questions.length){
        setQuestion();
        nextBtn.innerHTML = 'Next'
        title.innerHTML = 'Sample Question';

    }else{
        setQuestion()
        title.innerHTML = 'Result';
    }
}

function checkAnswer(e){
    if(e.target.dataset.correct == 'true'){
        e.target.classList.add('correct_btn');
        score++;
    }else{
        e.target.classList.add('selected_btn');
    }
    stopClick();
}

function stopClick(){
    nextBtn.style.display = 'block';
    option_block.childNodes.forEach((item) => {
        item.removeEventListener('click',checkAnswer);
        item.disabled = true
        if(item.dataset.correct == 'true'){
            item.classList.add('correct_btn');
        }
    })
}

function resetBtn(){
    nextBtn.style.display = 'none';
    while(option_block.firstChild){
        option_block.removeChild(option_block.firstChild);
    }
}

setQuestion();