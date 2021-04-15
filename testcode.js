const quizData = 
[
{
    question: "What does CSS stands for?",
    a: "Cool Style Sheet",
    b: "Cover Style Sheet",
    c: "Cascading Style Sheet",
    d: "none",
    correct:"c"
},
{

    question: "What type of Language is JS?",
    a: "Simple language",
    b: "Object-Oriented language ",
    c: "Not a programming language",
    d: "Cannot be usedin non-browser environments",
    correct:"b"
},
{

    question: "When was JS introduced?",
    a: "1996",
    b: "1995",
    c: "1999",
    d: "2010",
    correct:"b"
},
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text'); 
const b_text = document.getElementById('b_text'); 
const c_text = document.getElementById('c_text'); 
const d_text = document.getElementById('d_text'); 
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz()
{
   deselectAnswers();

const currentQuizData = quizData[currentQuiz];

questionEl.innerHTML = currentQuizData.question;
a_text.innerText = currentQuizData.a;
b_text.innerText = currentQuizData.b;
c_text.innerText = currentQuizData.c;
d_text.innerText = currentQuizData.d;

}

function deselectAnswers()
{ 
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected()
{
    let answer;
    
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click',() =>
{
    const answer = getSelected();
   // console.log(answer);
    if(answer)
    {
        if(answer === quizData[currentQuiz].correct)
        {
            score++;
        }
        currentQuiz++

        if(currentQuiz <quizData.length)
        {
            loadQuiz();
        }else{
            quiz.innerHTML =`<h2> You answered ${score} /${quizData.length}
            questions correctly </h2>
            <button onclick ="location.reload()">Reload</button>
            `

        }
    }
});





