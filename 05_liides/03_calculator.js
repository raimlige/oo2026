var CmToInches = /** @class */ (function () {
    function CmToInches() {
    }
    // formula --- in = cm/2.54
    CmToInches.prototype.calculate = function (cm) {
        return cm / 2.54;
    };
    CmToInches.prototype.inputUnit = function () {
        return "centimeters";
    };
    CmToInches.prototype.outputUnit = function () {
        return "inches";
    };
    return CmToInches;
}());
var InchesToCm = /** @class */ (function () {
    function InchesToCm() {
    }
    // formula --- cm = in * 2.54
    InchesToCm.prototype.calculate = function (inches) {
        return inches * 2.54;
    };
    InchesToCm.prototype.inputUnit = function () {
        return "inches";
    };
    InchesToCm.prototype.outputUnit = function () {
        return "centimeters";
    };
    return InchesToCm;
}());
