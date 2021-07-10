const startButton = document.getElementById('start-btn');
const questionsContainer = document.getElementById('questionContainer');
startButton.addEventListener('click', startGame);

function startGame(){
    console.log('started');
    startButton.classList.add('hide')
    questionsContainerElement.classList.remove(hide)
    setNextQuestion()

};

function setNextQuestion(){

};

function selectAnswer(){

};

const myQuestions = [
    {
        question: "What is a function",
        answers: [
            'A procedure to perform tasks or calculate a value.',
            'y=mx+b',
            'Direct Object Model',
            'Application Programing Interface'
        ],
        correctAnswer: 'A procedure to perform tasks or calculate a value.'
    },
    {
        question: "What is pseudocode? ",
        answers: [
            'A plain language description of the algorithm ',
            'A partial language of pseudonyms ',
            'A partial list of truths ',
            'A code that is partial'
        ],
        correctAnswer: 'A plain language description of the algorithm '
    },
    {
        question: "What is an array?",
        answers: [
            "A dress code",
            "A list",
            "A French word for soda",
            "A data structure that can include numbers or strings",
        ],
        correctAnswer: "A data structure that can include numbers or strings",
    },
    {
        question: "What is the correct for loop syntax?",
        answers:[
            "for(var i = 0; i< ;  i ++ ) {};",
            "For(var I = 0; i > ; I++) {}",
            "For(var i = 0; i >; i++ ) {};",
            "for (var i = 0; i > ; i++) { };",
        ],
        correctAnswer: "for(var i = 0; i< ;  i ++ ) {};"
    }
]
let startScreen = document.getElementById("start-screen");

addEventListener.onclick()
function startQuiz() {
    document.getElementById("start-screen").style.visibility = "hidden";

function generateQuiz(question, quizContainer, resultsContainer, submitButton) {
    function showQuestions(questions, questionsContainer) {

    }
    function showResults(questoins, quizContainer, resultsContainer) {

    }
    showQuestions(questions, quizContainer);

    submitButton.onclick = fucntion(); {
        showResults(questions, quizContainer, resultsContianer);
    }
}
//link start button to the timer, build a funtion
// 5-6 questions 
//let timerStart = setTimeout(())

}