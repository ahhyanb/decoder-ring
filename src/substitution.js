// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(message, alphabet, encode = true) {
    
    function isValidAlphabet(alphabet) {
      if (typeof alphabet !== "string" || alphabet.length !== 26) {
        return false;
      }

      const uniqueChars = [];

      for (let i = 0; i < alphabet.length; i++) {
        const char = alphabet[i];
      
        if (uniqueChars.includes(char)) {
          return false;
        }

        uniqueChars.push(char);
      }

      return uniqueChars.length === 26;
    }

    if (!isValidAlphabet(alphabet)) {
      return false;
    }

    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const messageArray = [...message.toLowerCase()];
    const resultArray = [];

    for (let i = 0; i < messageArray.length; i++) {
      const char = messageArray[i];

      if (char === " ") {
        resultArray.push(" ");
      } else {
        const index = encode ? standardAlphabet.indexOf(char) : alphabet.indexOf(char);
        resultArray.push(encode ? alphabet[index] : standardAlphabet[index]);
      }
    }

    return resultArray.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };