const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius()", () => {
    it("should encode a message", () => {
        const result = polybius("hello");
        const expected = "3251131343";
        expect(result).to.equal(expected);
    });

    it("should translate i and j to 42", () => {
        const result = polybius("ij ij");
        const expected = "4242 4242";
        expect(result).to.equal(expected);
    });

    it("should ignore CAPITAL LETTERS when decoding", () => {
        const result = polybius("CAPITAL LETTERS");
        const expected = "31115342441113 13514444512434";
        expect(result).to.equal(expected);
    });


    it("should encode a message with space", () => {
        const result = polybius("ryan bartolome");
        const expected = "24451133 211124444313432351";
        expect(result).to.equal(expected);
    });

    it("should translate 42 to i/j", () => {
        const result = polybius("42", false);
        const expected = "i/j";
        expect(result).to.equal(expected);
    });

    it("should decode a message", () => {
        const result = polybius("32511353 2351", false);
        const expected = "help me";
        expect(result).to.equal(expected);
    });

    it("should return false if the length of all number is odd", () => {
        const result = polybius("232323234", false);
        expect(result).to.equal(false);
    });


});