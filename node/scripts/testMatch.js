import { ATTRIBUTE_COUNT } from "./attributes.js";
import { players } from "./players.js";
import { findBestMatch } from "./match.js";

const userPreferences = new Array(ATTRIBUTE_COUNT).fill(75);//initializes spots with 75

// temporary test bias
userPreferences[0] += 10;//makes first attribute +10 (scoring_output)

console.log("User vector length:", userPreferences.length);
players.forEach(p =>
  console.log(p.name, "attr length:", p.attributes.length)
);

const match = findBestMatch(userPreferences, players);

if (!match) {
  console.error("No match found");
} else {
  console.log("Your basketball soulmate is:", match.name);
}
