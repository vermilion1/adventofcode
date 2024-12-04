module.exports = (input) => {
  const lines = input.trim().split("\n");

  const VALID_TEXT = ["MAS", "SAM"];
  const checkDirections =
    (lineIndex, charIndex) =>
    (...offsets) => {
      let internalText = "";
      for (let i = 0; i < offsets.length; i += 1) {
        internalText +=
          lines[lineIndex + offsets[i][0]]?.[charIndex + offsets[i][1]];
      }
      return VALID_TEXT.includes(internalText);
    };

  let count = 0;

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
    const line = lines[lineIndex];
    for (let charIndex = 0; charIndex < line.length; charIndex += 1) {
      if (line[charIndex] === "A") {
        const check = checkDirections(lineIndex, charIndex);
        count +=
          check([1, -1], [0, 0], [-1, 1]) && check([-1, -1], [0, 0], [1, 1]);
      }
    }
  }

  return count;
};
