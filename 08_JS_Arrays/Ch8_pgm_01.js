// Creating arrays
var scores;
var names;

scores = [3, 1, 8, 2];
names = ["Kandra", "Dax", "Blinky"];

// Add an extra element to each array
scores.push(5); // adding the score 5 to the scores array
names.push("Winky"); // adding the name "Winky" to the names array

console.log(scores); // [3, 1, 8, 2, 5]
console.log(names); // ["Kandra", "Dax", "Blinky", "Winky"]

// Declare a third variable, akaScores
var akaScores;

// Assign the scores array to akaScores
akaScores = scores;

console.log(akaScores); // [3, 1, 8, 2, 5]
