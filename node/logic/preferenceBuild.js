import { QUESTIONS } from '../data/questions.js';
import { ATTRIBUTES } from '../data/attributes.js';

export function applyAnswersToPreferences(answers, user) {
  for (let i = 0; i < QUESTIONS.length; i++) {
    const question = QUESTIONS[i];
    const answer = answers[i]?.toLowerCase();
    if (!answer) continue;//gets user answer if no answer, skip

    const effect = question.effects[answer];
    if (!effect) continue;//checks the effect of user answer. If answer has no effect, skip

    for (const [key, delta] of Object.entries(effect)) {
      if (key === '__ARCHETYPE__') {//checks if answer choice effects archetype
        for (const [archKey, value] of Object.entries(delta)) {
          user.archetype[archKey] = (user.archetype[archKey] || 0) + value;
        }
      } else if (key === '__NARRATIVE_TAGS__') {//if certain archetypes perpetuate certain narratives note it
        continue;
      } else {
        const index = ATTRIBUTES[key];
        if (index === undefined) {
          throw new Error(
            `Invalid attribute key "${key}" in question ${question.id}`
          );
        }//finds corresponding attribute if it exists, update. Give error otherwise
        user.preferences[index] += delta;
      }
    }
  }
}


