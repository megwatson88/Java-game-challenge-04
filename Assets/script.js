const startButton = document.getElementById('start-btn');
const questionsContainerElement = document.getElementById('question-container');
let shuffledQuestions, currentQuestionsIndex;
const questionElement = document.getElementById('question');
const answerButtonsElements = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultsForm =document.getElementById('high-scores')
//used to count the number of correct answers
let countRightAnswer = 0;

startButton.addEventListener('click', startGame);

nextButton.addEventListener('click', () => {
    currentQuestionsIndex++
    setNextQuestion()
});

function startGame() {
    console.log('started');
    startButton.classList.add('hide')
    shuffledQuestions = myQuestions.sort(() => Math.random() - .5)
    currentQuestionsIndex = 0
    questionsContainerElement.classList.remove('hide')
    setNextQuestion()
    countRightAnswer = 0

};

function setNextQuestion() {
    resestState()
    showQuestions(shuffledQuestions[currentQuestionsIndex])
};

function showQuestions(myQuestion) {
    questionElement.innerText = myQuestion.question,
        myQuestion.answers.forEach(answers => {
            const button = document.createElement('button')
            button.innerText = answers.text
            button.classList.add('btn')
            if (answers.correct) {
                button.dataset.correct = answers.answersCorrect
            }
            button.addEventListener('click', selectAnswer)
            answerButtonsElements.appendChild(button)
        })

};
function resestState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElements.firstChild) {
        answerButtonsElements.removeChild
            (answerButtonsElements.firstChild)
    }
};
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correctAnswer
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElements.children).forEach(button => {
        setStatusClass(button, button.dataset.correctAnswer)
    })
    if (shuffledQuestions.length > currentQuestionsIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innterText = 'Restart'
        startButton.classList.remove('hide')
    }
    if (correct) {
        countRightAnswer++;
    }
document.getElementById('correct-answers').innerHTML = countRightAnswer;
document.getElementById()
};

function setStatusClass(element, correctAnswer) {
    clearStatusClass(element)
    if (correctAnswer) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
};
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
};
// 5-6 questions
const myQuestions = [
    {
        question: "What is a function",
        answers: [
            { text: 'A procedure to perform tasks or calculate a value.', correct: true },
            { text: 'y=mx+b', correct: false },
            { text: 'Direct Object Model', correct: false },
            { text: 'Application Programing Interface', correct: false },
        ],
    },
    {
        question: "What is pseudocode? ",
        answers: [
            { text: 'A plain language description of the algorithm ', correct: true },
            { text: 'A partial language of pseudonyms ', correct: false },
            { text: 'A partial list of truths ', correct: false },
            { text: 'A code that is partial', correct: false }
        ],
    },
    {
        question: "What is an array?",
        answers: [
            { text: "A dress code", correct: false },
            { text: "A list", correct: false },
            { text: "A French word for soda", correct: false },
            { text: "A data structure that can include numbers or strings", correct: true },
        ],
    },
    {
        question: "What is the correct for loop syntax?",
        answers: [
            { text: "for(var i = 0; i< var;  i ++ ) {};", correct: true },
            { text: "For(var I = 0; i > var ; I++) {}", correct: false },
            { text: "For(var i = 0; i >var ; i++ ) {};", correct: false },
            { text: "for (var i = 0; i > var; i++) { };", correct: false },
        ],

    }
];



    //link start button to the timer, build a funtion

    //let timerStart = setTimeout(())
//let timerStart = document.getElementById('timer');
//addEventListener.on('click', timerStart);
//timerStart = setTimeout(() +=> {
   // console.log('endtime'),
//}, 500);
