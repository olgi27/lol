const quizData = [
    {
        question: 'Which NBA team has won the most championship titles?',
        a: 'Lakers',
        b: 'Celtics',
        c: 'Nets',
        d: 'Bulls',
        correct: 'b'
    }, {
        question: 'When did Michael Jordan get drafted to the Bulls?',
        a: '1973',
        b: '1960',
        c: '2001',
        d: '1984',
        correct: 'd'
    }, {
        question: 'How many rings did Kobe Bryant have?',
        a: '5',
        b: '0',
        c: '6',
        d: '9',
        correct: 'a'
    }, {
        question: 'Which NBA superstar has won the most MVPs in NBA?',
        a: 'LeBron James',
        b: 'Kareem Abdul-Jabbar',
        c: 'Allen Iverson',
        d: 'Magic Johnson',
        correct: 'b'
    }, {
        question: 'Who owns Charlotte Hornets?',
        a: 'Donald Trump',
        b: 'Isiah Thomas',
        c: 'Michael Jordan',
        d: 'Elon Musk',
        correct: 'c'
    }

];

const quiz = document.getElementById ("quiz");
const answerEls = document.querySelectorAll (".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked= false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer ===quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        } else{
            quiz.innerHTML = `
            <h2>You answered correctly at ${score}/${quizData.length}questions.</h2>
            
            <button onClick="location.reload()">Reload</button>`
        }
    }
});