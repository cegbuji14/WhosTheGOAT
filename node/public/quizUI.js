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
  if (answers[currentIndex] == null) {
    alert("Select an answer first");
    return;
  }

  if (currentIndex === questions.length - 1) {
    submitQuiz();
    return;
  }

  currentIndex++;
  renderQuestion();

  if (currentIndex === questions.length - 1) {
    nextBtn.textContent = "Finish";
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
  resultsDiv.style.display = "block";

  const mainMatch = matches[0];

  const others = matches
    .slice(1)
    .map(
      p => `<li>${p.name}</li>`
    )
    .join("");

  resultsDiv.innerHTML = `
    <h1>Your Match</h1>
    <h2>${mainMatch.name}</h2>

    <p><strong>Archetype:</strong> ${archetypeText}</p>

    <h3>Also Similar To</h3>
    <ul>
      ${others}
    </ul>

    <button id="retakeBtn">Retake Quiz</button>
  `;

  document.getElementById("retakeBtn").onclick = resetQuiz;
}


function resetQuiz() {
  currentIndex = 0;
  answers = [];

  document.getElementById("results").style.display = "none";
  quizDiv.style.display = "block";
  nextBtn.style.display = "inline-block";
  nextBtn.textContent = "Next";
  nextBtn.disabled = true;

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
        case "context": return "Context-Aware";
        default: return key;
      }
    })
    .join(" • ");
}


loadQuestions();
