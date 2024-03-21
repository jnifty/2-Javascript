// Global variables for DOM elements
const questionDiv = document.getElementById('question');
const answerDiv = document.getElementById('answer');
const feedbackDiv = document.getElementById('feedback');
let currentQuestion = null; // Variable to store the current question, initialized to null

function getTriviaQuestion() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = Math.floor(Math.random() * questions.length);
        const question = questions[index];
        if (index > questions.length) {
            reject('An error occurred while fetching the trivia question.');
          } else {
            resolve(question);
          }// Code to fetch random trivia will go here
      }, 1000); // Delay of 1 second
    });
  }

function displayQuestion(triviaQuestion) {
    questionDiv.textContent = triviaQuestion.question;
    answerDiv.value = '';
    feedbackDiv.textContent = '';
}

document.querySelector('#questionBtn').addEventListener('click', () => {
    getTriviaQuestion().then((question)=> {
        currentQuestion = question;
        displayQuestion(question);
    })
    .catch((error) => {
        console.error(error);
    })
})

document.querySelector('#answerBtn').addEventListener('click', () => {
    let feedbackMessage;
    const userAnswer = answerDiv.value.trim().toLowerCase();
    console.log(userAnswer, currentQuestion.answer);
    if (currentQuestion && userAnswer === currentQuestion.answer.toLowerCase()) {
        feedbackDiv.style.color = "green";
        feedbackMessage = 'Great job! Your answer is correct.';
    } else {
        feedbackDiv.style.color = "red";
        feedbackMessage = `Sorry, that answer is incorrect. The correct answer is: "${currentQuestion.answer}". Try another question!`;
    }
    feedbackDiv.textContent = feedbackMessage;
})