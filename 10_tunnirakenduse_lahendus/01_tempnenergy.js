var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MaterialAmount = /** @class */ (function () {
    function MaterialAmount(inputMass, inputHeatingCap, inputTemperature) {
        this.mass = inputMass;
        this.specific_heat_cap = inputHeatingCap;
        this.temperature = inputTemperature;
    }
    MaterialAmount.prototype.getTemp = function () {
        return this.temperature;
    };
    MaterialAmount.prototype.changeTemp = function (inputEnergy) {
        var newTemperature = (inputEnergy / (this.mass * this.specific_heat_cap));
        this.temperature = this.temperature + newTemperature;
    };
    MaterialAmount.prototype.getHeatCapacity = function () {
        var heatCapacity = this.specific_heat_cap * this.mass;
        return heatCapacity;
    };
    return MaterialAmount;
}());
var AirAmount = /** @class */ (function (_super) {
    __extends(AirAmount, _super);
    function AirAmount(length, width, height, temperature) {
        var volume = length * width * height;
        var airDensity = 1.23;
        var calculatedMass = volume * airDensity;
        var airSpecificHeat = 1012;
        //Passing the calculated mass, specific heat, and temp up to MaterialAmount
        return _super.call(this, calculatedMass, airSpecificHeat, temperature) || this;
    }
    return AirAmount;
}(MaterialAmount));
function calculateEqualTemp(materials) {
    var totalThermalEnergy = 0;
    var totalHeatCapacity = 0;
    for (var _i = 0, materials_1 = materials; _i < materials_1.length; _i++) {
        var material = materials_1[_i];
        var heatCapacity = material.getHeatCapacity();
        totalHeatCapacity += heatCapacity;
        totalThermalEnergy += (heatCapacity * material.getTemp());
    }
    if (totalHeatCapacity === 0) {
        console.log("No materials to calculate.");
        return;
    }
    var finalTemp = totalThermalEnergy / totalHeatCapacity;
    console.log("The calculated equal temperature is: ".concat(finalTemp.toFixed(2), " \u00B0C"));
}
var water = new MaterialAmount(3, 4200, 20);
var iron = new MaterialAmount(10, 412, 20);
var myRoomAir = new AirAmount(5, 4, 3, 25);
water.changeTemp(10000);
iron.changeTemp(10000);
console.log("Water temperature is now: ".concat(water.getTemp().toFixed(2), " \u00B0C"));
console.log("Iron temperature is now: ".concat(iron.getTemp().toFixed(2), " \u00B0C"));
if (iron.getTemp() > water.getTemp()) {
    console.log("Iron is hotter. Transferring 1000 Joules to water...");
    iron.changeTemp(-1000);
    water.changeTemp(1000);
    console.log("Updated Iron temperature: ".concat(iron.getTemp().toFixed(2), " \u00B0C"));
    console.log("Updated Water temperature: ".concat(water.getTemp().toFixed(2), " \u00B0C"));
}
else {
    console.log("Iron is not hotter than water. No transfer occurred.");
}
var myMaterials = [water, iron, myRoomAir];
calculateEqualTemp(myMaterials);
