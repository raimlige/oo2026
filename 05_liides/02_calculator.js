var CmToIn = /** @class */ (function () {
    function CmToIn() {
    }
    // formula --- in = cm/2.54
    CmToIn.prototype.calculate = function (cm) {
        return cm / 2.54;
    };
    CmToIn.prototype.inputUnit = function () {
        return "centimeters";
    };
    CmToIn.prototype.outputUnit = function () {
        return "inches";
    };
    return CmToIn;
}());
