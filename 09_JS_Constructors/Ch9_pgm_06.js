var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];
  
    this.showMoons = function () {
        this.moons.forEach(function (moon, index) {
            console.log("(" + index + ") " + moon);
        });
    };
  
    this.showPlanet = function () {
        console.log(this.name);
        console.log("Planet " + this.position + " - " + this.type);
        console.log("Moons:");
        this.showMoons();
    };
  
    this.addMoon = function (moon) {
        this.moons.unshift(moon); // Add new moon to the beginning of the moons array
    };

    this.getMoon = function (index) {
        if (index >= 0 && index < this.moons.length) {
            return this.moons[index];
        } else {
            return "No moon found at index " + index;
        }
    };
};

var planet1 = new Planet("Jupiter", 5, "Gas Giant");
planet1.addMoon("Io");
planet1.addMoon("Europa");
planet1.addMoon("Ganymede"); // Further Adventure 1

var planet2 = new Planet("Neptune", 8, "Ice Giant");
planet2.addMoon("Triton");
planet2.addMoon("Proteus"); // Further Adventure 1

var planet3 = new Planet("Mercury", 1, "Terrestrial");
planet3.addMoon("Mercury Moon 1"); // Further Adventure 1

[ planet1, planet2, planet3 ].forEach(function (planet) {
    planet.showPlanet();
});

// Further Adventures

// 4) Get a moon by index
console.log("\nGetting moon at index 1 of planet1:");
console.log(planet1.getMoon(1)); // Europa
console.log("\nGetting moon at index 0 of planet2:");
console.log(planet2.getMoon(0)); // Triton
console.log("\nGetting moon at index 2 of planet3:");
console.log(planet3.getMoon(2)); // Mercury Moon 1
console.log("\nGetting moon at index 5 of planet1 (non-existent):");
console.log(planet1.getMoon(5)); // No moon found at index 5
