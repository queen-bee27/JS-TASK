var getGuesser = function () {
    var secret = Math.floor(Math.random() * 10 + 1);

    return function (userNumber) {
        if (userNumber === secret) {
            return "Well done!";
        } else {
            if (userNumber < secret) {
                return "Too low!";
            } else {
                return "Too high!";
            }
        }
    };
};

var guess = getGuesser();
