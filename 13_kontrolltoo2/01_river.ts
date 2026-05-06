// Class to store river data - name, source, coordinates of intermediate points and mouth coordinates (x, y) in meters
// Function to calculate the distance between the source and the mouth
// Automated test to verify it

// Add a river-type variable targetRiver to a river, when river flows to sea it is set to null.
// Mouth coordinates of a river must match one of the intermediate points of its target river
// Method to calculate the path length from a given (intermediate) point to the sea, using target rivers if needed
// Automated test to verify it

// Create an application where a coordinate on an area is given.
// Find the shortest path to the nearest intermediate point and from there to the sea via target rivers.
// Display the path (html) and its length. Then input another point on the map and determine whether the nearest intermediate point to it becomes polluted if pollution starts flowing from the first point.

export class River {
    name: string;
    source: number[];
    intermediate_points: number[][];
    mouth: number[];
    targetRiver: River | null;

    constructor(inputName: string, inputSourceCoordinates: number[], inputIntermediatePoints: number[][], inputMouthCoordinates: number[], inputTargetRiver: River | null = null) {
        this.name = inputName;
        this.source = inputSourceCoordinates;
        this.intermediate_points = inputIntermediatePoints;
        this.mouth = inputMouthCoordinates;
        this.targetRiver = inputTargetRiver;
    }

    private getDistance(p1: number[], p2: number[]): number {
        //d = sqrt((x2-x1)**2 + (y2-y1)**2)
        return Math.sqrt((p2[0] - p1[0]) ** 2 + (p2[1] - p1[1]) ** 2);
    }

    calculateSourceToMouth(): number {
        return this.getDistance(this.source, this.mouth);
    }

    calculateDistanceToSea(startPoint: number[]): number {
        let totalDistance = 0;

        const points = [this.source, ...this.intermediate_points, this.mouth];

        // find the index of our starting point
        const startIndex = points.findIndex(p => p[0] === startPoint[0] && p[1] === startPoint[1]);

        if (startIndex !== -1) {
            // loop from the start index to the end of this river's points
            for (let i = startIndex; i < points.length - 1; i++) {
                totalDistance += this.getDistance(points[i], points[i + 1]);
            }
        }

        if (this.targetRiver) {
            totalDistance += this.targetRiver.calculateDistanceToSea(this.mouth);
        }
        return totalDistance;
    }
}

export class RiverManager {
    rivers: River[];

    constructor(inputRivers: River[]) {
        this.rivers = inputRivers;
    }

    //find nearest point to any river on a random map coord
    findNearestPoint(mapCoord: number[]) {
        let bestPoint = { river: this.rivers[0], coords: this.rivers[0].source, dist: Infinity };

        for (const river of this.rivers) {
            const allPoints = [river.source, ...river.intermediate_points, river.mouth];
            for (const p of allPoints) {
                const d = Math.sqrt((p[0] - mapCoord[0]) ** 2 + (p[1] - mapCoord[1]) ** 2);
                if (d < bestPoint.dist) {
                    bestPoint = { river: river, coords: p, dist: d };
                }
            }
        }
        return bestPoint;
    }

    //find shortest path to nearest point and then to sea
    getPathData(mapCoord: number[]) {
        const nearest = this.findNearestPoint(mapCoord);
        const distanceToSea = nearest.river.calculateDistanceToSea(nearest.coords);
        return {
            nearestPoint: nearest.coords,
            riverName: nearest.river.name,
            totalLength: nearest.dist + distanceToSea
        };
    }

    //determine if pollution from point a reaches point b
    checkPollution(startMapCoord: number[], targetMapCoord: number[]): boolean {
        const start = this.findNearestPoint(startMapCoord);
        const target = this.findNearestPoint(targetMapCoord);

        let current: River | null = start.river;
        let currentPoint = start.coords;

        while (current) {
            const pts = [current.source, ...current.intermediate_points, current.mouth];
            const idx = pts.findIndex(p => p[0] === currentPoint[0] && p[1] === currentPoint[1]);

            // check all points downstream in the current river
            for (let i = idx; i < pts.length; i++) {
                if (pts[i][0] === target.coords[0] && pts[i][1] === target.coords[1]) return true;
            }

            // move to the next river in the chain
            currentPoint = current.mouth;
            current = current.targetRiver;
        }
        return false;
    }
}