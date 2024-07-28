var buildPlanet = function (name, position, type) {
    var planet = {};

    planet.name = name;
    planet.position = position;
    planet.type = type;

    return planet;
};

var planet1 = buildPlanet(
    "Jupiter",
    5,
    "Gas Giant"
);

console.log(planet1.name);
console.log(planet1.position);
console.log(planet1.type);

// Further Adventures

// 1) Build a second planet
var planet2 = buildPlanet(
    "Mars",
    4,
    "Terrestrial"
);

// 2) Log its name and type
console.log(planet2.name);
console.log(planet2.type);
