const expect = require("chai").expect;
const { caesar } = require('../src/caesar')


describe("caesar()", () => {
    it("should encode thinkful to wklqnixo", () => {
        const expected = "wklqnixo";
        const actual = caesar("thinkful", 3);
        expect(actual).to.equal(expected);
    });
    
    it("should encode thinkful if the shift is -3 to qefkhcri", () => {
        const expected = "qefkhcri";
        const actual = caesar("thinkful", -3);
        expect(actual).to.equal(expected);
    });

    it("should encode Ryan Bartolome to Ifhu Ihyahvr", () => {
        const expected = "yfhu ihyavsvtl";
        const actual = caesar("Ryan Bartolome", 7);
        expect(actual).to.equal(expected);

    });

    it("should decode wklqnixo to thinkful", () => {
        const expected = "thinkful";
        const actual = caesar("wklqnixo", 3, false);
        expect(actual).to.equal(expected);
    });

    it("should decode qefkhcri to thinkful if the shift is -3", () => {
        const expected = "thinkful";
        const actual = caesar("qefkhcri", -3, false);
        expect(actual).to.equal(expected);
    });

    it("should shift beyond the length of the alphabet to wrap around", () => {
        const expected = "cde";
        const actual = caesar("xyz", 5);
        expect(actual).to.equal(expected);
    });

    it("should not change any of the characters that is not in the alphabet", () => {
        const expected = "!@#%qy";
        const actual = caesar("!@#%go", 10);
        expect(actual).to.equal(expected);
    });

});



