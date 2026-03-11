import { idCode } from "../02_idNumberChecker";

test("Gender", () => {
    expect(new idCode("5051323244").gender()).toBe("M")
})
