import { distance } from "./distance.js";

export function findBestMatch(userAttr, players) {
  if (!players || players.length === 0) {
    console.error("No players passed to matcher");
    return null;
  }

  let bestPlayer = null;
  let bestScore = Infinity;

  for (const p of players) {
    const d = distance(userAttr, p.attributes);

    console.log("Checking:", p.name, "distance:", d);

    if (!Number.isNaN(d) && d < bestScore) {
      bestScore = d;
      bestPlayer = p;
    }
  }

  return bestPlayer;
}

  