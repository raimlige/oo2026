"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
        //currently displaying in the panel
        this.panel = "";
    }
    Calculator.prototype.pressButton = function (b) {
        if (b == "C") {
            this.panel = "0";
        }
        else {
            this.panel += b;
        }
    };
    Calculator.prototype.getPanelContent = function () {
        return this.panel;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
