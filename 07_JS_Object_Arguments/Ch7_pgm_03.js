var buildCar;
var getCarInfo;
var car1;
var car2;

buildCar = function (make, model, year, color, price) {
    return {
        make: make,
        model: model,
        year: year,
        color: color,
        price: price
    };
};

getCarInfo = function (car) {
    return car.year + " " + car.make.toUpperCase() + " " + car.model + 
           " (" + car.color + ") - $" + car.price;
};

car1 = buildCar("Toyota", "Camry", 2020, "Blue", 24000);
car2 = buildCar("Tesla", "Model S", 2021, "Red", 79999);

console.log(getCarInfo(car1));
console.log(getCarInfo(car2));
