var between = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getGuesser = function () {
    var secret = between(30, 50);

    return function (userNumber) {
        if (userNumber === secret) {
            return "Well done!";
        } else {
            return "Unlucky, try again.";
        }
    };
};

var guess = getGuesser();

var between = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


