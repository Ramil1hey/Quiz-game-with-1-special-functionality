const tapToStart = document.querySelector('#tapToStart');
const quizGame = document.querySelector('#showQuiz');
const theQuestion = document.querySelector('#question');
const frsAns = document.querySelector('#one');
const secAns = document.querySelector('#two');
const thdAns = document.querySelector('#three');
const forthAns = document.querySelector('#four');
const timeProgress = document.querySelector('#time');

const questionsArr = [
    {
        question : '1 + 1',
        correct : '2',
        answer1 : '1',
        answer2 : '3',
        answer3 : '4',       
    },
    {
        question : 'Who was richest man in history by nationality',
        correct : 'African',
        answer1 : 'American',
        answer2 : 'Russian',
        answer3 : 'Arabian',       
    },
    {
        question : 'Can you blind type on keyboard ?',
        correct : '50%50',
        answer1 : 'yep',
        answer2 : 'noap',
        answer3 : 'yepnoap',
    },
    {
        question : 'are you enjoying when coding',
        correct : 'Yes',
        answer1 : 'yep if i don\'t see errors',
        answer2 : 'Noap',
        answer3 : 'Im not coder, im programmer',       
    },
];

// create some variables
let counter = 0;
let questionsLength = questionsArr.length - 1;
let runningQuestion = 0;
let TIMER;
var score = 0;
let randomNumber;
let roundNumber;

function start() {
    function noneButton() {
        tapToStart.style.display = 'none';
    }noneButton();

    function startQuiz() {
        quizGame.style.display = 'block';
    }startQuiz();

    checkCounter(counter);

    TIMER = setInterval(() => {
        checkCounter();
    }, 1000);

    setInterval(()=> checkAnswer(), 1000);
}

tapToStart.addEventListener('click', start);

function startQuestions() {
    theQuestion.innerHTML = questionsArr[runningQuestion].question;
    frsAns.innerHTML = questionsArr[runningQuestion].correct;
    secAns.innerHTML = questionsArr[runningQuestion].answer1;
    thdAns.innerHTML = questionsArr[runningQuestion].answer2;
    forthAns.innerHTML = questionsArr[runningQuestion].answer3;
};

function checkCounter() {
    if (counter <= 10) {
        startQuestions();
        TIMER;
        timeProgress.innerHTML = counter;
        counter++;
        randomAnswer();
    }
    else {
        counter = 0;
        runningQuestion++;
        if (runningQuestion < questionsArr.length) {
            startQuestions();
            TIMER;
        }
        else {
            clearInterval(TIMER);
            document.write(`END QUIZ! your score ${score}`);
        }
    }
};

function checkAnswer() {
    frsAns.onclick = () => {
        if (frsAns.innerHTML == questionsArr[runningQuestion].correct) {
            score++;
            counter = 11;
        }else counter = 11;
    }
    secAns.onclick = () => {
        if (secAns.innerHTML == questionsArr[runningQuestion].correct) {
            score++;
            counter = 11;
        }else counter = 11;
    }
    thdAns.onclick = () => {
        if (thdAns.innerHTML == questionsArr[runningQuestion].correct) {
            score++;
        } else counter = 11;
    }
    
    forthAns.onclick = () => {
        if (forthAns.innerHTML == questionsArr[runningQuestion].correct) {
            score++;
        } else counter = 11;
    }

    if (runningQuestion == 3) {
        document.querySelector('.ps').style.visibility = 'visible';
        frsAns.onclick = () => {
            score++;
            counter = 11;
        }
        secAns.onclick = () => {
            score++;
            counter = 11;
        }
        thdAns.onclick = () => {
            score++;
            counter = 11;
        }
        forthAns.onclick = () => {
            score++;
            counter = 11;
        }
    } 
    
}

function randomAnswer() {
    randomNumber = Math.random();
    randomNumber = (randomNumber * 4) + 1;
    roundNumber = Math.floor(randomNumber);

    if (roundNumber == 1) {
        frsAns.innerHTML = questionsArr[runningQuestion].correct;
        secAns.innerHTML = questionsArr[runningQuestion].answer1;
        thdAns.innerHTML = questionsArr[runningQuestion].answer2;
        forthAns.innerHTML = questionsArr[runningQuestion].answer3;
    }
    else if (roundNumber == 2) {
        frsAns.innerHTML = questionsArr[runningQuestion].answer1;
        secAns.innerHTML = questionsArr[runningQuestion].correct;
        thdAns.innerHTML = questionsArr[runningQuestion].answer2;
        forthAns.innerHTML = questionsArr[runningQuestion].answer3;
    }
    else if (roundNumber == 3) {
        frsAns.innerHTML = questionsArr[runningQuestion].answer2;
        secAns.innerHTML = questionsArr[runningQuestion].answer1;
        thdAns.innerHTML = questionsArr[runningQuestion].correct;
        forthAns.innerHTML = questionsArr[runningQuestion].answer3;
    }
    else {
        frsAns.innerHTML = questionsArr[runningQuestion].answer3;
        secAns.innerHTML = questionsArr[runningQuestion].answer1;
        thdAns.innerHTML = questionsArr[runningQuestion].answer2;
        forthAns.innerHTML = questionsArr[runningQuestion].correct;
    }
}