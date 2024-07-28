var getMessage;
var getHelloTo;
var sum;
var totalCost;

getMessage = function () {
    return "I’m going on an adventure!"; 
};

getHelloTo = function (name) {
    return "Hello to " + name;
};

sum = function (number1, number2) {
    return number1 + number2;
};

totalCost = function (callOutCharge, costPerHour, numberOfHours) {
    return callOutCharge + costPerHour * numberOfHours;
};

console.log(getMessage("I’m going on an adventure!"));
console.log(getHelloTo("Dax"));
console.log(getHelloTo("Kandra"));
console.log(getHelloTo("John")); 

console.log(sum(10, 20));                    
console.log(totalCost(30, 40, 3));            
console.log(totalCost(50, 35, 5));           


