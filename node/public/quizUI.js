let questions = [];
let currentIndex = 0;
let answers = [];

const quizDiv = document.getElementById("quiz");
const nextBtn = document.getElementById("nextBtn");

async function loadQuestions() {
  const res = await fetch("/quiz/questions");
  const data = await res.json();
  questions = data.questions;
  renderQuestion();
}

function renderQuestion() {
  const q = questions[currentIndex];
  quizDiv.innerHTML = `<h3>${q.text}</h3>`;

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      answers[currentIndex] = i;
    };
    quizDiv.appendChild(btn);
  });
}

nextBtn.onclick = () => {
  if (answers[currentIndex] == null) {
    alert("Select an answer first");
    return;
  }

  currentIndex++;

  if (currentIndex < questions.length) {
    renderQuestion();
  } else {
    submitQuiz();
  }
};

async function submitQuiz() {
  const res = await fetch("/quiz/submit-quiz", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ answers })
  });

  const data = await res.json();
  console.log("Preferences:", data.preferences);
}

loadQuestions();
