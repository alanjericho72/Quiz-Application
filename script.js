const quizData = [
    {
        question: "What is the primary purpose of the 'break' statement in programming?",
        a:"To terminate a loop or switch statement",
        b:"To skip the next iteration of a loop",
        c:"To define a case win a switch statement",
        d:"To exit the entire program",
        correct:"a",
    },

    {
        question: "In python, which keyword is used to defines function?",
        a:"func",
        b:"define",
        c:"def",
        d:"function",
        correct:"c",
    },

    {
        question: "What is the purpose of CSS in Web Development?",
        a:"Client-side Scripting",
        b:"Cascading Style Sheets",
        c:"Computer Style Syntax",
        d:"Code Style Specification",
        correct:"b",
    },

    {
        question: "Which data structure follows the last in, First Out(LIFO)principle",
        a:"Queue",
        b:"Stack",
        c:"Linked List",
        d:"Array",
        correct:"b"
    }
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
let countTime = 60;


loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}

function getSelected() {
    let answer = null;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer !== null) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            showResults();
        }
    } else {
        alert("Please select an answer before submitting.");
    }
});

function showResults() {
    quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button id="reload">Reload</button>
    `;
    
    const reloadBtn = document.getElementById('reload');
    reloadBtn.addEventListener('click', () => {
        location.reload();
    });
}

function updateTimer() {
    document.getElementById('timer').innerHTML = countTime;
        if(countTime <=0) {
    document.getElementById('timer').innerHTML ='Its Time!';
} else {
    countTime--;
    setTimeout(updateTimer,1000);
    }
}

updateTimer();
