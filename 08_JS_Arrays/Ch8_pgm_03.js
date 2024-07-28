var scores = [3, 1, 8, 2];

console.log("There are " + scores.length + " scores:");
console.log("The first score is " + scores[0]); 
console.log("The second score is " + scores[1]);
console.log("The third score is " + scores[2]);
console.log("The fourth score is " + scores[3]);

// Adding the fifth score
scores.push(5);
console.log("The fifth score is " + scores[4]);

// Logging the last score using scores.length
console.log("The last score is " + scores[scores.length - 1]);

// Adding an extra score and logging it
scores.push(7);
console.log("The sixth score is " + scores[5]);
console.log("The last score is " + scores[scores.length - 1]);
