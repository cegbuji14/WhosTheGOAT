import express from 'express';
import { applyAnswersToPreferences } from '../logic/preferenceBuild.js';
import { ATTRIBUTE_COUNT } from '../data/attributes.js';
import {  QUESTIONS } from "../data/questions.js";

const router = express.Router();
//GET REQUEST 
router.get("/questions", (req, res) => {
  res.json({ QUESTIONS });
});
//POST REQUEST
router.post('/submit-quiz', (req, res) => {
  console.log('Received /submit-quiz POST with body:', req.body);
  const { answers, user } = req.body;

  if (!answers || typeof answers !== 'object') {
    return res.status(400).json({ error: 'Invalid or missing answers' });
  }

  if (!user.preferences) {
    user.preferences = new Array(ATTRIBUTE_COUNT).fill(0);
  }
  if (!user.archetype) {
    user.archetype = {};
  }

  try {
    applyAnswersToPreferences(answers, user);
    res.json({ success: true, preferences: user.preferences, archetype: user.archetype });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;

