var square;

square = function (numberToSquare) {
  var result;
  result = numberToSquare * numberToSquare;
  console.log(numberToSquare + " * " + numberToSquare + " = " + result);
};

square(10);
square(-2);
square(1111);
square(0.5);


var cube = function (numberToCube) {
  var result;
  result = numberToCube * numberToCube * numberToCube;
  console.log(numberToCube + " * " + numberToCube + " * " + numberToCube + " = " + result);
};

cube(3);
cube(-2);
cube(0);
cube(0.5);

var squareRoot = function (numberToFindRoot) {
  var result;
  result = Math.sqrt(numberToFindRoot);
  console.log("The square root of " + numberToFindRoot + " is " + result);
};

squareRoot(9);
squareRoot(16);
squareRoot(0.25);
squareRoot(2);
