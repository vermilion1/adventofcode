module.exports = (input) => {
  const map = input.split("\n");
  const antidoteMap = input.split("\n").map((l) => l.split("").map(() => "."));
  const antennas = {};

  const setAntidote = (y, x) => {
    const line = antidoteMap[y];
    if (line && line[x]) {
      line[x] = "#";
    }
  };

  for (let y = 0; y < map.length; y += 1) {
    for (let x = 0; x < map[y].length; x += 1) {
      const value = map[y][x];
      if (value === ".") continue;
      if (antennas[value]) {
        antennas[value].push([y, x]);
      } else {
        antennas[value] = [[y, x]];
      }
    }
  }

  Object.values(antennas).forEach((positions) => {
    for (let i = 0; i < positions.length - 1; i += 1) {
      const [y1, x1] = positions[i];
      for (let j = i + 1; j < positions.length; j += 1) {
        const [y2, x2] = positions[j];
        const yDiff = y1 - y2;
        const xDiff = x1 - x2;
        setAntidote(y2 - yDiff, x2 - xDiff);
        setAntidote(y1 - yDiff * -1, x1 - xDiff * -1);
      }
    }
  });

  return antidoteMap.reduce((acc, line) => {
    return acc + line.filter((position) => position === "#").length;
  }, 0);
};
