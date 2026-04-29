class MaterialAmount {
    mass: number;
    specific_heat_cap: number;
    temperature: number;

    constructor(inputMass: number, inputHeatingCap: number, inputTemperature: number) {
        this.mass = inputMass;
        this.specific_heat_cap = inputHeatingCap;
        this.temperature = inputTemperature;
    }

    getTemp(): number {
        return this.temperature;
    }

    changeTemp(inputEnergy: number): void {
        let newTemperature = (inputEnergy / (this.mass * this.specific_heat_cap));
        this.temperature = this.temperature + newTemperature;
    }

    getHeatCapacity(): number {
        let heatCapacity = this.specific_heat_cap * this.mass;
        return heatCapacity;
    }
}

class AirAmount extends MaterialAmount {
    constructor(length: number, width: number, height: number, temperature: number) {
        const volume = length * width * height;
        const airDensity = 1.23;
        const calculatedMass = volume * airDensity;
        const airSpecificHeat = 1012;
        //Passing the calculated mass, specific heat, and temp up to MaterialAmount
        super(calculatedMass, airSpecificHeat, temperature);
    }
}

function calculateEqualTemp(materials: MaterialAmount[]) {
    let totalThermalEnergy = 0;
    let totalHeatCapacity = 0;

    for (const material of materials) {
        const heatCapacity = material.getHeatCapacity();
        totalHeatCapacity += heatCapacity;
        totalThermalEnergy += (heatCapacity * material.getTemp());
    }

    if (totalHeatCapacity === 0) {
        console.log("No materials to calculate.");
        return;
    }

    const finalTemp = totalThermalEnergy / totalHeatCapacity;
    console.log(`The calculated equal temperature is: ${finalTemp.toFixed(2)} °C`);
}

/* Testing */
let water = new MaterialAmount(3, 4200, 20);
let iron = new MaterialAmount(10, 412, 20);
let myRoomAir = new AirAmount(5, 4, 3, 25);
water.changeTemp(10000);
iron.changeTemp(10000);
console.log(`Water temperature is now: ${water.getTemp().toFixed(2)} °C`);
console.log(`Iron temperature is now: ${iron.getTemp().toFixed(2)} °C`);

if (iron.getTemp() > water.getTemp()) {
    console.log("Iron is hotter. Transferring 1000 Joules to water...");
    iron.changeTemp(-1000);
    water.changeTemp(1000);
    console.log(`Updated Iron temperature: ${iron.getTemp().toFixed(2)} °C`);
    console.log(`Updated Water temperature: ${water.getTemp().toFixed(2)} °C`);
} else {
    console.log("Iron is not hotter than water. No transfer occurred.");
}
const myMaterials = [water, iron, myRoomAir];
calculateEqualTemp(myMaterials);