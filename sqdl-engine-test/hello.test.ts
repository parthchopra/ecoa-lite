import { hello } from "sqdl-engine";

describe("hello", () => {
    it("hello jkl", () => {
        expect(hello("jkl")).toEqual("Hello, jkl");
    });

    it("hello uiop", () => {
        expect(hello("uiop")).toEqual("Hello, uiop");
    });
});