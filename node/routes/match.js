import { distance } from "../logic/distance.js";

export function findBestMatch(userAttr, players) {
  if (!players || players.length === 0) {
    console.error("No players passed to matcher");
    return null;
  }
  if (userAttr.length !== players[0].attributes.length) {
    console.error("User attribute vector length does not match player attribute length");
    return null;
  }
  

  let bestPlayer = null;
  let bestScore = Infinity;

  for (const p of players) {
    const d = distance(userAttr, p.attributes);

    console.log("Checking:", p.name, "distance:", d);//remove eventually

    if (!Number.isNaN(d) && d < bestScore) {
      bestScore = d;
      bestPlayer = p;
    }
  }

  return bestPlayer;
}

  