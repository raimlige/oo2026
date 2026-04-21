class Car {
    currentFuel: number;
    speed: number = 0;
    fuelEfficency: number;
    distanceTraveled: number = 0;

    constructor(initialFuel: number, efficiency: number) {
        this.currentFuel = initialFuel;
        this.fuelEfficency = efficiency;
    }

    setSpeed(newSpeed: number): void {
        this.speed = newSpeed;
    }

    getDistance(): number {
        return this.distanceTraveled;
    }

    getFuel(): number {
        return this.currentFuel;
    }

    driveOneMinute(): void {
        if (this.currentFuel <= 0) {
            return;
        }
        let distanceOneMinute = this.speed / 60;
        let fuelBurned = (distanceOneMinute / 100) * this.fuelEfficency;
        this.distanceTraveled = this.distanceTraveled + distanceOneMinute;
        this.currentFuel = this.currentFuel - fuelBurned;
        if (this.currentFuel < 0) {
            this.currentFuel = 0;
        }
    }

    calculateMaxRange(): number[] {
        let maxDistance = (this.currentFuel / this.fuelEfficency) * 100;
        let minutesLeft = (maxDistance / this.speed) * 60;
        return [maxDistance, minutesLeft]
    }
}


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