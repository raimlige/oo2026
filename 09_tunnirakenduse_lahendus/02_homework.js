var Car = /** @class */ (function () {
    function Car(initialFuel, efficiency) {
        this.speed = 0;
        this.distanceTraveled = 0;
        this.currentFuel = initialFuel;
        this.fuelEfficency = efficiency;
    }
    Car.prototype.setSpeed = function (newSpeed) {
        this.speed = newSpeed;
    };
    Car.prototype.getDistance = function () {
        return this.distanceTraveled;
    };
    Car.prototype.getFuel = function () {
        return this.currentFuel;
    };
    Car.prototype.driveOneMinute = function () {
        if (this.currentFuel <= 0) {
            return;
        }
        var distanceOneMinute = this.speed / 60;
        var fuelBurned = (distanceOneMinute / 100) * this.fuelEfficency;
        this.distanceTraveled = this.distanceTraveled + distanceOneMinute;
        this.currentFuel = this.currentFuel - fuelBurned;
        if (this.currentFuel < 0) {
            this.currentFuel = 0;
        }
    };
    Car.prototype.calculateMaxRange = function () {
        var maxDistance = (this.currentFuel / this.fuelEfficency) * 100;
        var minutesLeft = (maxDistance / this.speed) * 60;
        return [maxDistance, minutesLeft];
    };
    return Car;
}());
/* TESTING
let myCar = new Car(50, 8);
console.log("Starting fuel: " + myCar.getFuel() + " L");
myCar.setSpeed(120);
console.log("Speed set to 120 km/h");
myCar.driveOneMinute();
console.log("After driving for 1 minute: ")
console.log("Distance traveled: " + myCar.getDistance() + " km");
console.log("Fuel remaining: " + myCar.getFuel() + " L");

let rangeStats = myCar.calculateMaxRange();
console.log("Max range remaining " + rangeStats[0] + " km");
console.log("Minutes until empty " + rangeStats[1] + " minutes");
*/ 
