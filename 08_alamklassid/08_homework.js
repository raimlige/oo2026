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
//abstract base class for all devices
var SmartDevice = /** @class */ (function () {
    function SmartDevice(name) {
        this.isOn = false;
        this.name = name;
    }
    //method to switch on and off
    SmartDevice.prototype.toggle = function () {
        this.isOn = !this.isOn;
        console.log("".concat(this.name, " is now ").concat(this.isOn ? 'ON' : 'OFF', "."));
    };
    return SmartDevice;
}());
var SmartLight = /** @class */ (function (_super) {
    __extends(SmartLight, _super);
    function SmartLight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.brightness = 100;
        return _this;
    }
    SmartLight.prototype.setBrightness = function (level) {
        if (level < 0 || level > 100) {
            throw new Error("Brightness must be in the range of 0-100.");
        }
        this.brightness = level;
        console.log("".concat(this.name, " brightness is changed: ").concat(this.brightness, "%"));
    };
    SmartLight.prototype.getStatus = function () {
        return "".concat(this.name, " (Light) - Status: ").concat(this.isOn ? 'ON' : 'OFF', ", Brightness: ").concat(this.brightness, "%");
    };
    return SmartLight;
}(SmartDevice));
var Thermostat = /** @class */ (function (_super) {
    __extends(Thermostat, _super);
    function Thermostat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.temperature = 21;
        return _this;
    }
    Thermostat.prototype.setTemperature = function (temp) {
        this.temperature = temp;
        console.log("".concat(this.name, " tempreture is set on ").concat(this.temperature, "\u00B0C peale."));
    };
    Thermostat.prototype.getStatus = function () {
        return "".concat(this.name, " (Thermostat) - Status: ").concat(this.isOn ? 'ON' : 'OFF', ", Temperature: ").concat(this.temperature, "\u00B0C");
    };
    return Thermostat;
}(SmartDevice));
var SmartHomeHub = /** @class */ (function () {
    function SmartHomeHub() {
        this.devices = [];
    }
    SmartHomeHub.prototype.addDevice = function (device) {
        this.devices.push(device);
        console.log("[Center] Device added: ".concat(device.name));
    };
    SmartHomeHub.prototype.turnAllOff = function () {
        console.log("\n[Center] Switching all devices off...");
        for (var _i = 0, _a = this.devices; _i < _a.length; _i++) {
            var device = _a[_i];
            if (device.isOn) {
                device.toggle();
            }
        }
    };
    SmartHomeHub.prototype.printSystemStatus = function () {
        console.log("\n--- Smart home system status ---");
        for (var _i = 0, _a = this.devices; _i < _a.length; _i++) {
            var device = _a[_i];
            console.log(device.getStatus());
        }
        console.log("------------------------------\n");
    };
    return SmartHomeHub;
}());
var myHome = new SmartHomeHub();
var livingRoomLight = new SmartLight("Living room light");
var bedroomThermostat = new Thermostat("Bedroom thermostat");
myHome.addDevice(livingRoomLight);
myHome.addDevice(bedroomThermostat);
livingRoomLight.toggle();
livingRoomLight.setBrightness(75);
bedroomThermostat.toggle();
bedroomThermostat.setTemperature(23);
myHome.printSystemStatus();
myHome.turnAllOff();
myHome.printSystemStatus();
