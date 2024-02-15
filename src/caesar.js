// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift|| shift === 0 || shift < -25 || shift > 25){
      return false;
    }

    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    const inputArray = input.toLowerCase().split("");

    const changeLetter = (letter) => {
      if (alphabet.includes(letter)) {
        const currentLetter = alphabet.indexOf(letter);

        let newLetter = (currentLetter + (encode ? shift : -shift) + 26) % 26;
        return alphabet[newLetter];

      } else {
        return letter;
      }
    
    };

    const resultArray = inputArray.map((character) => changeLetter(character));

    return resultArray.join("");

  }

  return {
    caesar,
  };
})();



module.exports = { caesar: caesarModule.caesar };
