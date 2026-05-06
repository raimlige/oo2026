// Class to store river data - name, source, coordinates of intermediate points and mouth coordinates (x, y) in meters
// Function to calculate the distance between the source and the mouth
// Automated test to verify it
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Add a river-type variable targetRiver to a river, when river flows to sea it is set to null.
// Mouth coordinates of a river must match one of the intermediate points of its target river
// Method to calculate the path length from a given (intermediate) point to the sea, using target rivers if needed
// Automated test to verify it
// Create an application where a coordinate on an area is given.
// Find the shortest path to the nearest intermediate point and from there to the sea via target rivers.
// Display the path (html) and its length. Then input another point on the map and determine whether the nearest intermediate point to it becomes polluted if pollution starts flowing from the first point.
var River = /** @class */ (function () {
    function River(inputName, inputSourceCoordinates, inputIntermediatePoints, inputMouthCoordinates, inputTargetRiver) {
        if (inputTargetRiver === void 0) { inputTargetRiver = null; }
        this.name = inputName;
        this.source = inputSourceCoordinates;
        this.intermediate_points = inputIntermediatePoints;
        this.mouth = inputMouthCoordinates;
        this.targetRiver = inputTargetRiver;
    }
    River.prototype.getDistance = function (p1, p2) {
        //d = sqrt((x2-x1)**2 + (y2-y1)**2)
        return Math.sqrt(Math.pow((p2[0] - p1[0]), 2) + Math.pow((p2[1] - p1[1]), 2));
    };
    River.prototype.calculateSourceToMouth = function () {
        return this.getDistance(this.source, this.mouth);
    };
    River.prototype.calculateDistanceToSea = function (startPoint) {
        var totalDistance = 0;
        var points = __spreadArray(__spreadArray([this.source], this.intermediate_points, true), [this.mouth], false);
        // find the index of our starting point
        var startIndex = points.findIndex(function (p) { return p[0] === startPoint[0] && p[1] === startPoint[1]; });
        if (startIndex !== -1) {
            // loop from the start index to the end of this river's points
            for (var i = startIndex; i < points.length - 1; i++) {
                totalDistance += this.getDistance(points[i], points[i + 1]);
            }
        }
        if (this.targetRiver) {
            totalDistance += this.targetRiver.calculateDistanceToSea(this.mouth);
        }
        return totalDistance;
    };
    return River;
}());
var RiverManager = /** @class */ (function () {
    function RiverManager(inputRivers) {
        this.rivers = inputRivers;
    }
    //find nearest point to any river on a random map coord
    RiverManager.prototype.findNearestPoint = function (mapCoord) {
        var bestPoint = { river: this.rivers[0], coords: this.rivers[0].source, dist: Infinity };
        for (var _i = 0, _a = this.rivers; _i < _a.length; _i++) {
            var river = _a[_i];
            var allPoints = __spreadArray(__spreadArray([river.source], river.intermediate_points, true), [river.mouth], false);
            for (var _b = 0, allPoints_1 = allPoints; _b < allPoints_1.length; _b++) {
                var p = allPoints_1[_b];
                var d = Math.sqrt(Math.pow((p[0] - mapCoord[0]), 2) + Math.pow((p[1] - mapCoord[1]), 2));
                if (d < bestPoint.dist) {
                    bestPoint = { river: river, coords: p, dist: d };
                }
            }
        }
        return bestPoint;
    };
    //find shortest path to nearest point and then to sea
    RiverManager.prototype.getPathData = function (mapCoord) {
        var nearest = this.findNearestPoint(mapCoord);
        var distanceToSea = nearest.river.calculateDistanceToSea(nearest.coords);
        return {
            nearestPoint: nearest.coords,
            riverName: nearest.river.name,
            totalLength: nearest.dist + distanceToSea
        };
    };
    //determine if pollution from point a reaches point b
    RiverManager.prototype.checkPollution = function (startMapCoord, targetMapCoord) {
        var start = this.findNearestPoint(startMapCoord);
        var target = this.findNearestPoint(targetMapCoord);
        var current = start.river;
        var currentPoint = start.coords;
        while (current) {
            var pts = __spreadArray(__spreadArray([current.source], current.intermediate_points, true), [current.mouth], false);
            var idx = pts.findIndex(function (p) { return p[0] === currentPoint[0] && p[1] === currentPoint[1]; });
            // check all points downstream in the current river
            for (var i = idx; i < pts.length; i++) {
                if (pts[i][0] === target.coords[0] && pts[i][1] === target.coords[1])
                    return true;
            }
            // move to the next river in the chain
            currentPoint = current.mouth;
            current = current.targetRiver;
        }
        return false;
    };
    return RiverManager;
}());
