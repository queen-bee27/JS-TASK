var add;

add = function (number1, number2) {
	var total = number1 + number2;
	return total;
};

var sum = add(50, 23);

console.log(sum); 


var sum2 = add(30, 40);
console.log(sum2); 

//2) Change the call to console.log so that
     //the display on the console reads:
     //'The sum of 50 and 23 is 73'
     //using the add function to generate the answer.

     var add;

add = function (number1, number2) {
	var total = number1 + number2;
	return total;
};

var number1 = 50;
var number2 = 23;
var sum = add(number1, number2);

console.log("The sum of " + number1 + " and " + number2 + " is " + sum);  // Output: The sum of 50 and 23 is 73

//Using the add function to add more than two numbers by nesting calls:
//javascript

var add;

add = function (number1, number2) {
	var total = number1 + number2;
	return total;
};

var sum1 = add(10, 20);
var sum2 = add(sum1, 30);
var sum3 = add(sum2, 40);

console.log("The sum of 10, 20, 30, and 40 is " + sum3);  
 

var add;

add = function (number1, number2) {
	var total = number1 + number2;
	return total;
};

var addThree = function (number1, number2, number3) {
	var sum = add(number1, number2);
	sum = add(sum, number3);
	return sum;
};

var sumOfThree = addThree(10, 20, 30);
console.log("The sum of 10, 20, and 30 is " + sumOfThree);  // Output: The sum of 10, 20, and 30 is 60
