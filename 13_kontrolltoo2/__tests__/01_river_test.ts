import { River } from "../01_river";

let riverObj: River;

beforeEach(() => {
    riverObj = new River(
        "My river",
        [20, 15],
        [[30, 20]],
        [90, 76]
    )
});

//1st part tests (calculateSourceToMouth method)
test("verify river name", () => {
    expect(riverObj.name).toBe("My river");
});

test("calculate distance: (20, 15) to (90, 76)", () => {
    expect(riverObj.calculateSourceToMouth()).toBeCloseTo(92.8493, 4);
});

test("change the mouth and recalculate", () => {
    riverObj.mouth = [20, 25];
    expect(riverObj.calculateSourceToMouth()).toBe(10);
});

test("zero distance when source and mouth coincide", () => {
    riverObj.mouth = [100, 100];
    riverObj.source = [100, 100];
    expect(riverObj.calculateSourceToMouth()).toBe(0);
});

test("dealing with negative coordinates", () => {
    riverObj.mouth = [-20, -15];
    riverObj.source = [-90, -76];
    expect(riverObj.calculateSourceToMouth()).toBeCloseTo(92.8493, 4);
})