"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
        //currently displaying in the panel
        this.panel = "";
    }
    Calculator.prototype.pressButton = function (b) {
        if (b === "C") {
            this.panel = "0";
        }
        else if (b === "=") {
            try {
                // eval() calculates string (for example 5+5 ) as an mathematical answer
                this.panel = eval(this.panel).toString();
            }
            catch (e) {
                // if it catches an error displays an text "error"
                this.panel = "Error";
            }
        }
        else {
            // if panel displays only "0", replace it with a new number
            if (this.panel === "0") {
                this.panel = b;
            }
            else {
                this.panel += b;
            }
        }
    };
    Calculator.prototype.getPanelContent = function () {
        return this.panel;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
