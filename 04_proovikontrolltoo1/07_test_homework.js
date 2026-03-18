/*                Battery
Charging 1 mAh of battery capacity requires 3.6 joules of energy.
1 watt equals 1 joule per second. */
var Battery = /** @class */ (function () {
    function Battery(maximum_capacity, current_charge, g, x, y) {
        this.maximum_capacity = maximum_capacity;
        this.current_charge = current_charge;
        this.g = g;
        this.x = x;
        this.y = y;
        this.width = 300;
        this.height = 80;
        this.draw();
    }
    Battery.prototype.draw = function () {
        this.g.clearRect(this.x - 10, this.y - 40, 500, 200);
        var percentage = (this.current_charge / this.maximum_capacity) * 100;
        this.g.fillStyle = "black";
        this.g.font = "18px Arial";
        this.g.fillText("Charge: ".concat(this.current_charge.toFixed(2), " / ").concat(this.maximum_capacity, " mAh (").concat(percentage.toFixed(1), "%)"), this.x, this.y - 15);
        this.g.strokeStyle = "black";
        this.g.lineWidth = 3;
        this.g.strokeRect(this.x, this.y, this.width, this.height);
        this.g.fillStyle = "black";
        this.g.fillRect(this.x + this.width, this.y + 20, 15, 40);
        var fillWidth = (this.current_charge / this.maximum_capacity) * this.width;
        if (percentage <= 20) {
            this.g.fillStyle = "red";
        }
        else if (percentage <= 50) {
            this.g.fillStyle = "orange";
        }
        else {
            this.g.fillStyle = "green";
        }
        this.g.fillRect(this.x, this.y, fillWidth, this.height);
        this.g.font = "16px Arial";
        if (this.current_charge >= this.maximum_capacity) {
            this.g.fillStyle = "red";
            this.g.fillText("Warning: Battery is fully charged!", this.x, this.y + this.height + 25);
        }
        else if (this.current_charge <= 0) {
            this.g.fillStyle = "red";
            this.g.fillText("Warning: Battery is completely drained!", this.x, this.y + this.height + 25);
        }
    };
    Battery.prototype.charge = function (seconds) {
        var charger = 50;
        var mah_per_second = charger / 3.6;
        for (var i = 0; i < seconds; i++) {
            this.current_charge += mah_per_second;
            if (this.current_charge >= this.maximum_capacity) {
                this.current_charge = this.maximum_capacity;
                break;
            }
        }
        this.draw();
    };
    Battery.prototype.drain = function (mah_to_remove) {
        this.current_charge -= mah_to_remove;
        if (this.current_charge <= 0) {
            this.current_charge = 0;
        }
        this.draw();
    };
    return Battery;
}());
