import { River } from "../01_river";

let mainRiver: River;
let tributary: River;

beforeEach(() => {
    mainRiver = new River(
        "My river",
        [0, 0],
        [[10, 10], [20, 20]],
        [30, 30],
        null
    );

    tributary = new River(
        "Tributary",
        [0, 10],
        [],
        [10, 10],
        mainRiver
    );
});

test("Main river distance from (10,10) to sea", () => {
    expect(mainRiver.calculateDistanceToSea([10, 10])).toBeCloseTo(28.2842, 3);
});

test("Tributary distance includes its own length plus main river", () => {
    expect(tributary.calculateDistanceToSea([0, 10])).toBeCloseTo(38.2842, 3);
});

test("Tributary from its own mouth only returns main river distance", () => {
    expect(tributary.calculateDistanceToSea([10, 10])).toBeCloseTo(28.2842, 3);
});