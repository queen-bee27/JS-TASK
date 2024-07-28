var line = function (lineLength) {
    var line = "========================================";
    lineLength = Math.max(0, lineLength);
    lineLength = Math.min(40, lineLength);
    return line.substr(0, lineLength);
};

var spaces = function (length) {
    var spaceString = "                                        "; // 40 spaces
    length = Math.max(0, length);
    length = Math.min(40, length);
    return spaceString.substr(0, length);
};

var emptyBox = function (width) {
    width = Math.max(2, width);
    width = Math.min(40, width);
    var topBottom = line(width);
    var middle = "=" + spaces(width - 2) + "=";

    console.log(topBottom);
    for (var i = 0; i < 3; i++) {
        console.log(middle);
    }
    console.log(topBottom);
};


for (var i = -20; i <= 60; i += 10) {
    console.log("Line length " + i + ": " + line(i));
}

console.log("\nTesting spaces function:");
console.log("'" + spaces(10) + "'");
console.log("'" + spaces(50) + "'");

console.log("\nTesting emptyBox function:");
emptyBox(12);
emptyBox(50);
emptyBox(1);
