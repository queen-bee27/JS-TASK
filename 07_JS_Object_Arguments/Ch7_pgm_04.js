var point1;
var point2;
var move;
var showPoint;
var reflectX;
var rotate90;

move = function (point, change) {
    return {
        x: point.x + change.x,
        y: point.y + change.y
    };
};

showPoint = function (point) {
    console.log("( " + point.x + " , " + point.y + " )");
};

reflectX = function (point) {
    return {
        x: point.x,
        y: -point.y
    };
};

rotate90 = function (point) {
    return {
        x: -point.y,
        y: point.x
    };
};

point1 = { x: 2, y: 5 };

// Move point1 by (4, -2)
point2 = move(point1, { x: 4, y: -2 });

showPoint(point1);
console.log("Move 4 across and 2 down");
showPoint(point2);

var point3 = reflectX(point2);
console.log("Reflect across x-axis");
showPoint(point3);

var point4 = rotate90(point3);
console.log("Rotate 90 degrees anticlockwise");
showPoint(point4);
