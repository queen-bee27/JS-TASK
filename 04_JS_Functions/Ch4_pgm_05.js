var findTotal;
var displayMenu;

findTotal = function () {
	result = number1 + number2;
};

displayMenu = function () {
	console.log("Please choose an option:");
	console.log("(1) Print log");
	console.log("(2) Upload file");
	console.log("(9) Quit");
};

var number1,number2,result;

number1 = 10;
number2 = 30;

findTotal();

console.log("The total is: " + result);

displayMenu();