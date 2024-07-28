var msg;
var showMessage;

msg = "It's full of stars!";

showMessage = function () {
	console.log(message);
};

showMessage();

var message = "Hello, world!";

var showMessages = function () {
    console.log(msg);
    console.log(message);
};

showMessages();

var showCombinedMessage = function () {
    var combinedMessage = msg + " " + message;
    console.log(combinedMessage);
};

showCombinedMessage();