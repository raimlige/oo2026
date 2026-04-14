//abstract base class for all devices
abstract class SmartDevice {
    name: string;
    isOn: boolean = false;

    constructor(name: string) {
        this.name = name;
    }

    //method to switch on and off
    toggle(): void {
        this.isOn = !this.isOn;
        console.log(`${this.name} is now ${this.isOn ? 'ON' : 'OFF'}.`);
    }

    abstract getStatus(): string;
}

class SmartLight extends SmartDevice {
    brightness: number = 100;

    setBrightness(level: number): void {
        if (level < 0 || level > 100) {
            throw new Error("Brightness must be in the range of 0-100.");
        }
        this.brightness = level;
        console.log(`${this.name} brightness is changed: ${this.brightness}%`)
    }

    getStatus(): string {
        return `${this.name} (Light) - Status: ${this.isOn ? 'ON' : 'OFF'}, Brightness: ${this.brightness}%`;
    }
}

class Thermostat extends SmartDevice {
    temperature: number = 21;

    setTemperature(temp: number): void {
        this.temperature = temp;
        console.log(`${this.name} tempreture is set on ${this.temperature}°C peale.`);
    }

    getStatus(): string {
        return `${this.name} (Thermostat) - Status: ${this.isOn ? 'ON' : 'OFF'}, Temperature: ${this.temperature}°C`;
    }
}

class SmartHomeHub {
    devices: SmartDevice[] = [];

    addDevice(device: SmartDevice): void {
        this.devices.push(device);
        console.log(`[Center] Device added: ${device.name}`);
    }

    turnAllOff(): void {
        console.log("\n[Center] Switching all devices off...");
        for (let device of this.devices) {
            if (device.isOn) {
                device.toggle();
            }
        }
    }

    printSystemStatus(): void {
        console.log("\n--- Smart home system status ---")
        for (let device of this.devices) {
            console.log(device.getStatus());
        }
        console.log("------------------------------\n")
    }
}

const myHome = new SmartHomeHub();

const livingRoomLight = new SmartLight("Living room light");
const bedroomThermostat = new Thermostat("Bedroom thermostat");

myHome.addDevice(livingRoomLight);
myHome.addDevice(bedroomThermostat);

livingRoomLight.toggle();
livingRoomLight.setBrightness(75);

bedroomThermostat.toggle();
bedroomThermostat.setTemperature(23);

myHome.printSystemStatus();

myHome.turnAllOff();
myHome.printSystemStatus();