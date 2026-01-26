let questions = [];
let currentIndex = 0;
let answers = [];

const quizDiv = document.getElementById("quiz");
const nextBtn = document.getElementById("nextBtn");

async function loadQuestions() {
  try {
    const res = await fetch("/quiz/questions");
    const data = await res.json();
    questions = data.QUESTIONS;
    renderQuestion();
  } catch (err) {
    alert("Failed to load questions.");
  }
}

function renderQuestion() {
  const q = questions[currentIndex];
  quizDiv.innerHTML = `<h3>${q.text}</h3>`;

  Object.entries(q.options).forEach(([key, optionText]) => {
    const btn = document.createElement("button");
    btn.textContent = optionText;

    btn.onclick = () => {
      answers[currentIndex] = key;

      Array.from(quizDiv.querySelectorAll("button")).forEach(b => {
        b.style.backgroundColor = "";
      });
      btn.style.backgroundColor = "#d3d3d3";
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
  // You can handle/display results here if you want
}

loadQuestions();
