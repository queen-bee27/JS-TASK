var totalCost;

totalCost = function (callOutCharge, costPerHour, numberOfHours) {
	return callOutCharge + costPerHour * numberOfHours;
};

// Calculate cost for 12 hours
console.log("$" + totalCost(30, 40, 12));  // Output: $510

// Adding a discount parameter:
// javascript

var totalCost;

totalCost = function (callOutCharge, costPerHour, numberOfHours, discount) {
	var total = callOutCharge + costPerHour * numberOfHours;
	if (discount) {
		total -= discount;
	}
	return total;
};

// Calculate total cost with a $20 discount
console.log("$" + totalCost(30, 40, 3, 20));

// Updating the function to subtract the discount:

var totalCost;

totalCost = function (callOutCharge, costPerHour, numberOfHours, discount) {
	var total = callOutCharge + costPerHour * numberOfHours;
	if (discount) {
		total -= discount;
	}
	return total;
};

// Calculate total cost with a $20 discount
console.log("$" + totalCost(30, 40, 3, 20));

// Displaying the total cost after applying a discount coupon:
var totalCost;

totalCost = function (callOutCharge, costPerHour, numberOfHours, discount) {
	var total = callOutCharge + costPerHour * numberOfHours;
	if (discount) {
		total -= discount;
	}
	return total;
};

// Calculate total cost with a $20 discount
console.log("$" + totalCost(30, 40, 3, 20)); 