class TripRoute {
    constructor(
        protected x: number[],
        protected y: number[]
    ) { }
    // method to add a new stop to the trip
    addStop(x: number, y: number): void {
        this.x.push(x);
        this.y.push(y);
    }
    // distance formula
    distance(x1: number, y1: number, x2: number, y2: number): number {
        const a = x2 - x1;
        const b = y2 - y1;
        return Math.sqrt(a * a + b * b);
    }
    calculateTotalDistance(): number {
        let total = 0;
        // loop through the array of points
        for (let i = 1; i < this.x.length; i++) {
            total += this.distance(
                this.x[i - 1], this.y[i - 1],
                this.x[i], this.y[i]
            );
        }
        // add the distance to return back to the start (school)
        total += this.distance(
            this.x[this.x.length - 1], this.y[this.y.length - 1],
            this.x[0], this.y[0]
        );
        return Math.round(total);
    }
    //drawing the route
    draw(g: CanvasRenderingContext2D): void {
        if (this.x.length === 0) return;
        //drawing the lines connecting dots
        g.beginPath();
        g.moveTo(this.x[0], this.y[0]);

        for (let i = 1; i < this.x.length; i++) {
            g.lineTo(this.x[i], this.y[i]);
        }
        g.lineTo(this.x[0], this.y[0]);
        g.strokeStyle = "royalblue";
        g.lineWidth = 3;
        g.stroke();

        //drawing dots to represent the actual stops
        g.fillStyle = "red";
        for (let i = 0; i < this.x.length; i++) {
            g.beginPath();
            g.arc(this.x[i], this.y[i], 6, 0, Math.PI * 2);
            g.fill();
        }
    }
}

function averageCost(arr: number[]): number {
    if (arr.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return Math.round(sum / arr.length);
}

function slidingAverageCosts(arr: number[], windowSize: number = 3): number[] {
    const out: number[] = []
    for (let i = 0; i <= arr.length - windowSize; i++) {
        //take a slice of the array (items 0 .. 2)
        let slice = arr.slice(i, i + windowSize);
        //caluclated average for this slice and push it to the output
        out.push(averageCost(slice));
    }
    return out;
}