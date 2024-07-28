// Create an array of rectangle objects
var rectangles = [
    { length: 5, width: 3 },
    { length: 10, width: 2 },
    { length: 6, width: 4 },
    { length: 8, width: 7 }
];

// Define an assignArea function
var assignArea = function (rectangle) {
    rectangle.area = rectangle.length * rectangle.width;
};

// Define a showInfo function
var showInfo = function (rectangle) {
    console.log("Length: " + rectangle.length);
    console.log("Width: " + rectangle.width);
    console.log("Area: " + rectangle.area);
};

// Use forEach and your two functions to display info about each of the rectangles in the array
rectangles.forEach(assignArea);
rectangles.forEach(showInfo);
