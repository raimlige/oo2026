var TripRoute = /** @class */ (function () {
    function TripRoute(x, y) {
        this.x = x;
        this.y = y;
    }
    // method to add a new stop to the trip
    TripRoute.prototype.addStop = function (x, y) {
        this.x.push(x);
        this.y.push(y);
    };
    // distance formula
    TripRoute.prototype.distance = function (x1, y1, x2, y2) {
        var a = x2 - x1;
        var b = y2 - y1;
        return Math.sqrt(a * a + b * b);
    };
    TripRoute.prototype.calculateTotalDistance = function () {
        var total = 0;
        // loop through the array of points
        for (var i = 1; i < this.x.length; i++) {
            total += this.distance(this.x[i - 1], this.y[i - 1], this.x[i], this.y[i]);
        }
        // add the distance to return back to the start (school)
        total += this.distance(this.x[this.x.length - 1], this.y[this.y.length - 1], this.x[0], this.y[0]);
        return Math.round(total);
    };
    //drawing the route
    TripRoute.prototype.draw = function (g) {
        if (this.x.length === 0)
            return;
        //drawing the lines connecting dots
        g.beginPath();
        g.moveTo(this.x[0], this.y[0]);
        for (var i = 1; i < this.x.length; i++) {
            g.lineTo(this.x[i], this.y[i]);
        }
        g.lineTo(this.x[0], this.y[0]);
        g.strokeStyle = "royalblue";
        g.lineWidth = 3;
        g.stroke();
        //drawing dots to represent the actual stops
        g.fillStyle = "red";
        for (var i = 0; i < this.x.length; i++) {
            g.beginPath();
            g.arc(this.x[i], this.y[i], 6, 0, Math.PI * 2);
            g.fill();
        }
    };
    return TripRoute;
}());
function averageCost(arr) {
    if (arr.length === 0)
        return 0;
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return Math.round(sum / arr.length);
}
function slidingAverageCosts(arr, windowSize) {
    if (windowSize === void 0) { windowSize = 3; }
    var out = [];
    for (var i = 0; i <= arr.length - windowSize; i++) {
        //take a slice of the array (items 0 .. 2)
        var slice = arr.slice(i, i + windowSize);
        //caluclated average for this slice and push it to the output
        out.push(averageCost(slice));
    }
    return out;
}
