/*                Battery
Charging 1 mAh of battery capacity requires 3.6 joules of energy.
1 watt equals 1 joule per second. */

class Battery {
    protected width: number = 300;
    protected height: number = 80;

    constructor(
        protected maximum_capacity: number,
        protected current_charge: number,
        protected g: CanvasRenderingContext2D,
        protected x: number,
        protected y: number
    ) {
        this.draw();
    }

    draw() {
        this.g.clearRect(this.x - 10, this.y - 40, 500, 200);
        let percentage = (this.current_charge / this.maximum_capacity) * 100;

        this.g.fillStyle = "black";
        this.g.font = "18px Arial";
        this.g.fillText(`Charge: ${this.current_charge.toFixed(2)} / ${this.maximum_capacity} mAh (${percentage.toFixed(1)}%)`, this.x, this.y - 15);

        this.g.strokeStyle = "black";
        this.g.lineWidth = 3;
        this.g.strokeRect(this.x, this.y, this.width, this.height);

        this.g.fillStyle = "black";
        this.g.fillRect(this.x + this.width, this.y + 20, 15, 40);

        let fillWidth = (this.current_charge / this.maximum_capacity) * this.width;

        if (percentage <= 20) {
            this.g.fillStyle = "red";
        } else if (percentage <= 50) {
            this.g.fillStyle = "orange";
        } else {
            this.g.fillStyle = "green";
        }

        this.g.fillRect(this.x, this.y, fillWidth, this.height);

        this.g.font = "16px Arial";
        if (this.current_charge >= this.maximum_capacity) {
            this.g.fillStyle = "red";
            this.g.fillText("Warning: Battery is fully charged!", this.x, this.y + this.height + 25);
        } else if (this.current_charge <= 0) {
            this.g.fillStyle = "red";
            this.g.fillText("Warning: Battery is completely drained!", this.x, this.y + this.height + 25);
        }
    }

    charge(seconds: number) {
        let charger = 50;
        let mah_per_second = charger / 3.6;

        for (let i = 0; i < seconds; i++) {
            this.current_charge += mah_per_second;

            if (this.current_charge >= this.maximum_capacity) {
                this.current_charge = this.maximum_capacity;
                break;
            }
        }
        this.draw();
    }

    drain(mah_to_remove: number) {
        this.current_charge -= mah_to_remove;

        if (this.current_charge <= 0) {
            this.current_charge = 0;
        }
        this.draw();
    }
}
