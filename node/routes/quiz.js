import express from 'express';
import { applyAnswersToPreferences } from '../logic/preferenceBuild.js';
import { ATTRIBUTE_COUNT } from '../data/attributes.js';
import {  QUESTIONS } from "../data/questions.js";
import { findBestMatch } from "./match.js";
import { players } from "../data/players.js";


const router = express.Router();
//GET REQUEST 
router.get("/questions", (req, res) => {
  res.json({ QUESTIONS });
});
//POST REQUEST
router.post('/submit-quiz', (req, res) => {
  console.log('Received /submit-quiz POST with body:', req.body);

  const { answers } = req.body;

  if (!answers || typeof answers !== 'object') {
    return res.status(400).json({ error: 'Invalid or missing answers' });
  }

  // ✅ create user server-side
  const user = {
    preferences: new Array(ATTRIBUTE_COUNT).fill(0),
    archetype: {}
  };

try {
  applyAnswersToPreferences(answers, user);
  console.log("applyAnswersToPreferences called", answers, user);
  const scaledPreferences = user.preferences.map(p => p * 100);
  const matchedPlayer = findBestMatch(scaledPreferences, players);
  
  //const matchedPlayer = findBestMatch(user.preferences, players);
  console.log("Matched player chosen:", matchedPlayer);
  if (!matchedPlayer) {
    return res.status(500).json({ error: "No matching player found" });
  }

  res.json({
    success: true,
    player: matchedPlayer,
    preferences: user.preferences,
    archetype: user.archetype
  });
} catch (err) {
  res.status(400).json({ error: err.message });
}

});


export default router;

