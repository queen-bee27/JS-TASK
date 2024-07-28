var secret = 8;

var guess = function (userNumber) {
  if (userNumber === secret) {
    console.log("Well done!");
  } else {
    console.log("Unlucky, try again.");
  }
};

// Testing the guess function
// Call guess with different numbers to see the output
// Example: guess(5), guess(10), guess(8)

guess(2);  // Outputs: "Unlucky, try again."
guess(10); // Outputs: "Unlucky, try again."
guess(8);  // Outputs: "Well done!"

if (userNumber === secret) {
    console.log("Well done!");
  } else {
    console.log("Incorrect guess, please try again.");
  }
  