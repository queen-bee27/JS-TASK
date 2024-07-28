var planet = "Jupiter";
var bigPlanet = planet.toUpperCase();

console.log(planet + " becomes " + bigPlanet);


var getBig = function (str) {
    return str.toUpperCase();
};


var getSmall = function (str) {
    return str.toLowerCase();
};

console.log(getBig("Earth"));
console.log(getSmall("Mars"));


var testString = "NePtUnE";
console.log("Original: " + testString);
console.log("Upper case: " + getBig(testString));
console.log("Lower case: " + getSmall(testString));
