import { Calculator } from "../03_calculator";

let calcobj: Calculator;

//this runs before every test
//one test might change the calculator, if we dont have this next test would start with the modified data
beforeEach(() => {
    calcobj = new Calculator();
});

test("empty init", () => {
    expect(calcobj.getPanelContent()).toBe("");
})

test("simple input", () => {
    calcobj.pressButton("7");
    expect(calcobj.getPanelContent()).toBe("7");
})

test("multible input", () => {
    calcobj.pressButton("7");
    calcobj.pressButton("8");
    expect(calcobj.getPanelContent()).toBe("78");
})

test("clear panel", () => {
    calcobj.pressButton("2");
    calcobj.pressButton("3");
    calcobj.pressButton("C");
    expect(calcobj.getPanelContent()).toBe("0");
})