import express from 'express';
import { applyAnswersToPreferences } from '../logic/preferenceBuild.js';
import { ATTRIBUTE_COUNT } from '../data/attributes.js';
import {  QUESTIONS } from "../data/questions.js";
//import { findBestMatch } from "./match.js";
import { findTopMatches } from "./match.js";

import { players } from "../data/players.js";


const router = express.Router();
//GET REQUEST 
router.get("/questions", (req, res) => {
  res.json({ QUESTIONS });
});

function zeroCenterPlayerAttributes(players) {
  return players.map(player => {
    const avg =
      player.attributes.reduce((sum, val) => sum + val, 0) / player.attributes.length;
    const adjustedAttrs = player.attributes.map(attr => attr - avg);
    return { ...player, attributes: adjustedAttrs };
  });
}
const adjustedPlayers = zeroCenterPlayerAttributes(players);

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
  
    // Get top 3 matches
    const topMatches = findTopMatches(scaledPreferences, adjustedPlayers, 3);
  
    console.log("Top matches chosen:", topMatches);
  
    if (!topMatches || topMatches.length === 0) {
      return res.status(500).json({ error: "No matching players found" });
    }
  
    res.json({
      success: true,
      topMatches,
      preferences: user.preferences,
      archetype: user.archetype
    });
  
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
  
  

});


export default router;

