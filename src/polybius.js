// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  function polybius(input, encode = true) {
      const polybiusSquare = [
          ["A", "B", "C", "D", "E"],
          ["F", "G", "H", "I/J", "K"],
          ["L", "M", "N", "O", "P"],
          ["Q", "R", "S", "T", "U"],
          ["V", "W", "X", "Y", "Z"],
      ];
  
      function findCoordinates(letter) {
          for (let column = 0; column < polybiusSquare[0].length; column++) {
              for (let row = 0; row < polybiusSquare.length; row++) {
                  if (polybiusSquare[row][column].includes(letter)) {
                      return [(column + 1).toString(), (row + 1).toString()];
                  }
              }
          }
          return null;
      }
  
      function findLetters(coordinates) {
          const [column, row] = coordinates;
          return polybiusSquare[row - 1][column - 1].toLowerCase();
      }
  
      let result = "";
  
      if (!encode && input.replace(/ /g, '').length % 2 === 1) {
          return false;
      }
  
      if (encode) {
          for (let i = 0; i < input.length; i++) {
              let character = input[i].toUpperCase();
              let encodedCharacter = "";
  
              if (character === " ") {
                  result += " ";
              } else {
                  if (character === "I" || character === "J") {
                      encodedCharacter = "42";
                  } else {
                      const coordinates = findCoordinates(character);
                      if (coordinates) {
                          encodedCharacter = coordinates.join("");
                      }
                  }
                  result += encodedCharacter;
              }
          }
      } else {
          for (let i = 0; i < input.length; i++) {
              const character = input[i];
  
              if (character === " ") {
                  result += " ";
              } else {
                  const pair = input.slice(i, i + 2);
  
                  if (pair.trim() === "") {
                      
                      result += " ";
                  } else {
                      const row = parseInt(pair[1]) - 1;
                      const column = parseInt(pair[0]) - 1;
  
                      result += findLetters([column + 1, row + 1]);
  
                      i++;
                  }
              }
          }
      }
  
      return result;
  }
  


  return {
    polybius,
  };


})();

module.exports = { polybius: polybiusModule.polybius };


