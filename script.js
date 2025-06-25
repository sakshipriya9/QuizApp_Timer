const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
    answer: "Delhi"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: "Mars"
  },
  {
    question: "What is 5 + 3?",
    options: ["5", "8", "10", "7"],
    answer: "8"
  },
  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "Python", "CSS", "C++"],
    answer: "CSS"
  },
  {
    question: "Which is the smallest continent?",
    options: ["Asia", "Africa", "Australia", "Europe"],
    answer: "Australia"
  }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let timer;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const timerElement = document.getElementById("time");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result");
const scoreElement = document.getElementById("score");

function startQuiz() {
  showQuestion();
  timer = setInterval(updateTimer, 1000);
}

function showQuestion() {
  const q = questions[currentQuestion];
  questionElement.textContent = q.question;
  optionsElement.innerHTML = "";

  q.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.onclick = () => selectAnswer(li, q.answer);
    optionsElement.appendChild(li);
  });
}

function selectAnswer(selected, correctAnswer) {
  const allOptions = optionsElement.querySelectorAll("li");
  allOptions.forEach(option => option.style.pointerEvents = "none");

  if (selected.textContent === correctAnswer) {
    selected.style.backgroundColor = "#4CAF50";
    score++;
  } else {
    selected.style.backgroundColor = "#f44336";
  }
}

function updateTimer() {
  timeLeft--;
  timerElement.textContent = timeLeft;
  if (timeLeft === 0) {
    clearInterval(timer);
    showResult();
  }
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    clearInterval(timer);
    showResult();
  }
});

function showResult() {
  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");
  scoreElement.textContent = score;
}

startQuiz();