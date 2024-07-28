var getGuesser = function () {
    var secret = 8;

    return function (userNumber) {
        if (userNumber === secret) {
            console.log("Well done!");
        } else {
            console.log("Unlucky, try again.");
        }
    };
};
var guess = getGuesser();
guess(8);  // Outputs: "Well done!"
guess(5);  // Outputs: "Unlucky, try again."
