var showSmaller = function (num1, num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);

    console.log(smaller + " is smaller than " + larger);
};

var showLarger = function (num1, num2) {
    var larger = Math.max(num1, num2);
    var smaller = Math.min(num1, num2);

    console.log(larger + " is larger than " + smaller);
};

var showSmallest = function (num1, num2, num3) {
    var smallest = Math.min(num1, num2, num3);
    
    console.log(smallest + " is the smallest number");
};

showSmaller(12, 3);
showSmaller(-10, 3);
showSmaller(7, 7);

showLarger(12, 3);
showLarger(-10, 3);
showLarger(7, 7);

showSmallest(12, 3, -5);
showSmallest(-10, 3, 0);
showSmallest(7, 7, 7);
