import { applyAnswersToPreferences } from './preferenceBuild.js';
import { ATTRIBUTE_COUNT } from './data/attributes.js';

const user = {
  preferences: new Array(ATTRIBUTE_COUNT).fill(0),
  archetype: { context: 0 },
};

const answers = {
  15: 'a', // simulate user choosing A for question 15
};

applyAnswersToPreferences(answers, user);

console.log('Preferences after answers:');
console.log(user.preferences);

console.log('Archetype after answers:');
console.log(user.archetype);
