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

test("addition: 5+5 = 10", () => {
    calcobj.pressButton("5");
    calcobj.pressButton("+");
    calcobj.pressButton("5");
    calcobj.pressButton("=");
    expect(calcobj.getPanelContent()).toBe("10");
});

test("division 7-2 = 5", () => {
    calcobj.pressButton("7");
    calcobj.pressButton("-");
    calcobj.pressButton("2");
    calcobj.pressButton("=");
    expect(calcobj.getPanelContent()).toBe("5")
});

test("multiplication 5*3 = 15", () => {
    calcobj.pressButton("5");
    calcobj.pressButton("*");
    calcobj.pressButton("3");
    calcobj.pressButton("=");
    expect(calcobj.getPanelContent()).toBe("15")
});

test("division 4/2 = 2", () => {
    calcobj.pressButton("4");
    calcobj.pressButton("/");
    calcobj.pressButton("2");
    calcobj.pressButton("=");
    expect(calcobj.getPanelContent()).toBe("2")
});

test("zero replacement 0 --> 7", () => {
    calcobj.pressButton("C");
    calcobj.pressButton("7");
    expect(calcobj.getPanelContent()).toBe("7")
});

test("faulty input 5++5", () => {
    calcobj.pressButton("5");
    calcobj.pressButton("+");
    calcobj.pressButton("+");
    calcobj.pressButton("5");
    calcobj.pressButton("=");
    expect(calcobj.getPanelContent()).toBe("Error")
});