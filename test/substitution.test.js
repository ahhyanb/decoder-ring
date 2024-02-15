// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
    it("should check if the alphabet can include special characters", () => {
        const message = "zyx";
        const alphabet = "abcdefghijklmnopqrstuvw#$*";
        const result = substitution(message, alphabet);
        const expected = "*$#";
        expect(result).to.equal(expected);
    });

    it("maintain the spaces througout", () => {
        const message = "r y a n";
        const alphabet = "@bcdefghijklm#opq%stuvwx*z";
        const result = substitution(message, alphabet);
        const expected = "% * @ #";
        expect(result).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const message = "LOOK UP";
        const alphabet = "qwertyuioplkjhgfdsazxcvbnm";
        const result = substitution(message, alphabet);
        const expected = "kggl xf";
        expect(result).to.equal(expected);
    });

    it("should return false if alphabet parameters contains less than or more than 26 characters", () => {
        const message = "this is the message";
        const alphabet = "asdfghjklmnbvcxz";
        const result = substitution(message, alphabet);
        expect(result).to.equal(false);
    });

    it("should decode a message", () => {
        const message = "kggl xf";
        const alphabet = "qwertyuioplkjhgfdsazxcvbnm";
        const result = substitution(message, alphabet, false);
        const expected = "look up";
        expect(result).to.equal(expected);
    });

    it("should decode a message with special characters and spaces", () => {
        const message = "% * @ #";
        const alphabet = "@bcdefghijklm#opq%stuvwx*z"
        const result = substitution(message, alphabet, false);
        const expected = "r y a n";
        expect(result).to.equal(expected);
    });
    



});