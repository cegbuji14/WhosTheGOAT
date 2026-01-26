import express from 'express'; // assuming ES modules in package.json
import cors from 'cors'; // optional, only if cross-origin requests are needed
import quizRouter from './routes/quiz.js';
import { players } from './data/players.js';
import { findBestMatch } from './routes/match.js';
import { ATTRIBUTE_COUNT } from './data/attributes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // optional, remove if not needed
app.use(express.json());
app.use('/quiz', quizRouter);


app.post('/match', (req, res) => {
  const userPreferences = req.body.preferences;

  if (!userPreferences || userPreferences.length !== ATTRIBUTE_COUNT) {
    return res.status(400).json({ error: `preferences array must be length ${ATTRIBUTE_COUNT}` });
  }

  const match = findBestMatch(userPreferences, players);

  if (!match) {
    return res.status(404).json({ error: 'No match found' });
  }

  res.json({ match: match.name });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
