let questions = [];
let currentIndex = 0;
let answers = [];

const quizDiv = document.getElementById("quiz");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const questionCounter = document.getElementById("questionCounter");

nextBtn.disabled = true;
backBtn.disabled = true;

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

  // Update question counter text
  questionCounter.textContent = `Question ${currentIndex + 1} / ${questions.length}`;

  // Update next button text
  nextBtn.textContent = currentIndex === questions.length - 1 ? "Finish" : "Next";

  // Enable/disable back button
  backBtn.disabled = currentIndex === 0;

  const q = questions[currentIndex];
  quizDiv.innerHTML = `<h3>${q.text}</h3>`;

  Object.entries(q.options).forEach(([key, optionText]) => {
    const btn = document.createElement("button");
    btn.textContent = optionText;

    btn.onclick = () => {
      answers[currentIndex] = key;

      // Reset all buttons background
      Array.from(quizDiv.querySelectorAll("button")).forEach(b => {
        b.style.backgroundColor = "";
      });

      btn.style.backgroundColor = "#d3d3d3";
      nextBtn.disabled = false; // Enables next button
    };

    // If already answered, highlight it
    if (answers[currentIndex] === key) {
      btn.style.backgroundColor = "#d3d3d3";
      nextBtn.disabled = false;
    }

    quizDiv.appendChild(btn);
  });
}

nextBtn.onclick = () => {
  if (answers[currentIndex] == null) {
    alert("Select an answer first");
    return;
  }

  if (currentIndex === questions.length - 1) {
    submitQuiz();
    return;
  }

  currentIndex++;
  renderQuestion();//goes through quiz until last questions then submits quiz
};

backBtn.onclick = () => {
  if (currentIndex === 0) return;
  currentIndex--;
  renderQuestion();
};

async function submitQuiz() {
  quizDiv.innerHTML = "<h2>Finding your match...</h2>";
  nextBtn.style.display = "none";
  backBtn.style.display = "none";
  questionCounter.style.display = "none";

  const res = await fetch("/quiz/submit-quiz", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ answers })
  });

  const data = await res.json();

  if (!data.success) {
    quizDiv.innerHTML = "<p>Something went wrong.</p>";
    return;
  }

  showResults(data.topMatches, data.archetype);
}

function showResults(matches, archetype) {
  const resultsDiv = document.getElementById("results");
  const archetypeText = formatArchetype(archetype);

  quizDiv.style.display = "none";
  document.getElementById("quiz-container").style.display = "none";
  resultsDiv.style.display = "block";

  const mainMatch = matches[0];//#1 match in array of matches
  const others = matches
    .slice(1)
    .map(p => `<li>${p.name}</li>`)
    .join("");//array of other matches ignoring first match (main)

  resultsDiv.innerHTML = `
    <h1>Your GOAT...</h1>
    <h2>${mainMatch.name}</h2>
    <p><strong>Preferred Archetype:</strong> ${archetypeText}</p>
    <h3>Other players who match you:</h3>
    <ul>${others}</ul>
    <button id="retakeBtn">Retake Quiz</button>
  `;

  document.getElementById("retakeBtn").onclick = resetQuiz;
}

function resetQuiz() {
  currentIndex = 0;
  answers = [];

  const resultsDiv = document.getElementById("results");
  resultsDiv.style.display = "none";

  // Resets UI elements
  quizDiv.style.display = "block";
  document.getElementById("quiz-container").style.display = "block";
  nextBtn.style.display = "inline-block";
  backBtn.style.display = "inline-block";
  questionCounter.style.display = "block";

  nextBtn.textContent = "Next";
  nextBtn.disabled = true;
  backBtn.disabled = true;

  renderQuestion();
}

function formatArchetype(archetype) {
  if (!archetype || Object.keys(archetype).length === 0) {
    return "Balanced";
  }

  return Object.entries(archetype)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([key]) => {
      switch (key) {
        case "teamFirst": return "Team-First";
        case "heliocentric": return "Heliocentric";
        case "systemPlayer": return "System Player";
        case "oneOnOneStyle": return "Iso Player";
        case "context": return "Context-Aware";
        default: return key;
      }
    })//gives names based on archetypes
    .join(" • ");
}

loadQuestions();
