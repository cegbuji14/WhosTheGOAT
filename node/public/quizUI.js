let questions = [];
let currentIndex = 0;
let answers = [];

const quizDiv = document.getElementById("quiz");
const nextBtn = document.getElementById("nextBtn");
nextBtn.disabled = true;

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
  nextBtn.disabled = true;

  if (currentIndex === questions.length - 1) {
    nextBtn.textContent = "Finish";
  } else {
    nextBtn.textContent = "Next";
  }

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
      nextBtn.disabled = false; // ✅ enables Next button
    };

    quizDiv.appendChild(btn);
  });
}

nextBtn.onclick = () => {
  // last question → submit
  if (currentIndex === questions.length - 1) {
    submitQuiz();
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

  quizDiv.innerHTML = "<h2>Finding your match...</h2>";
  nextBtn.style.display = "none";
  const res = await fetch("/quiz/submit-quiz", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ answers })
  });

  const data = await res.json();

  console.log("Matched player:", data);//test
  //handle/display results here
  if (data.player) {
    quizDiv.innerHTML = `
      <h2>Your Match</h2>
      <h1>${data.player.name}</h1>
    `;
  } else {
    quizDiv.innerHTML = "<h2>No match found.</h2>";
  }
}

loadQuestions();
