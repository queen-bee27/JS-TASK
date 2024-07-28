var secret = 8;

var guess = function (userNumber) {
  if (userNumber === secret) {
    console.log("Well done!");
  } else if (userNumber > secret) {
    console.log("Too high!");
  }
};

// Testing the guess function
// Call guess with different numbers to see the output
// Example: guess(5), guess(10), guess(8)
