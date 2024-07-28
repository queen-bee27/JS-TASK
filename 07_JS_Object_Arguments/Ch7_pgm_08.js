var message = "We choose to go to the Moon!";

// Step 1: Log specific parts of the message
console.log(message.substr(25, 5)); // "Moon!"
console.log(message.substr(12, 9)); // "go to the"
console.log(message.substr(0, 9));  // "We choose"

// Step 2: Omitting the second argument
console.log(message.substr(15));    // "go to the Moon!"

// Step 3: Using negative numbers as arguments
console.log(message.substr(-5));    // "Moon!"
console.log(message.substr(-9, 5)); // "the M"

