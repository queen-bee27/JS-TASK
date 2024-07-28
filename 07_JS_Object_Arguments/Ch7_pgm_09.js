var message = "We choose to go to the Moon!";

// Step 1: Find where 'go' starts
var indexGo = message.indexOf("go");
console.log("Index of 'go': " + indexGo);

// Step 2: Display 'choose'
var indexChoose = message.indexOf("choose");
console.log("Index of 'choose': " + indexChoose);
console.log("The word 'choose': " + message.substr(indexChoose, 6));

// Step 3: Find 'oo' in 'Moon'
var indexOo = message.lastIndexOf("oo");
console.log("Index of 'oo' in 'Moon': " + indexOo);
console.log("Substring 'oo' in 'Moon': " + message.substr(indexOo, 2));
