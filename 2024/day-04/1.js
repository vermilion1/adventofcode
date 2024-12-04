module.exports = (input) => {
  const lines = input.trim().split("\n");

  const checkDirections = (lineIndex, charIndex) => (yMultiply, xMultiply) => {
    let internalText = "";
    for (let step = 0; step < 4; step += 1) {
      internalText +=
        lines[lineIndex + step * yMultiply]?.[charIndex + step * xMultiply];
    }
    return internalText === "XMAS";
  };

  let count = 0;

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
    const line = lines[lineIndex];
    for (let charIndex = 0; charIndex < line.length; charIndex += 1) {
      if (line[charIndex] === "X") {
        const check = checkDirections(lineIndex, charIndex);
        for (let y = -1; y <= 1; y += 1) {
          for (let x = -1; x <= 1; x += 1) {
            count += check(y, x);
          }
        }
      }
    }
  }

  return count;
};
