import { QUESTIONS } from '../data/questions.js';
import { ATTRIBUTES } from '../data/attributes.js';

export function applyAnswersToPreferences(answers, user) {
  for (let i = 0; i < QUESTIONS.length; i++) {
    const question = QUESTIONS[i];
    const answer = answers[i]?.toLowerCase();
    if (!answer) continue;

    const effect = question.effects[answer];
    if (!effect) continue;

    for (const [key, delta] of Object.entries(effect)) {
      if (key === '__ARCHETYPE__') {
        for (const [archKey, value] of Object.entries(delta)) {
          user.archetype[archKey] = (user.archetype[archKey] || 0) + value;
        }
      } else if (key === '__NARRATIVE_TAGS__') {
        continue;
      } else {
        const index = ATTRIBUTES[key];
        if (index === undefined) {
          throw new Error(
            `Invalid attribute key "${key}" in question ${question.id}`
          );
        }
        user.preferences[index] += delta;
      }
    }
  }
}


