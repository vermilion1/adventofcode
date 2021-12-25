module.exports = input => {
  const coords = [];
  input
    .split('\n')
    .forEach(line => {
      const match = line.split(/(\d+),(\d+) -> (\d+),(\d+)/)
      if (!match) return;

      const [x1, y1, x2, y2] = match.slice(1).map(Number);
      if (x1 === x2) {
        return coords.push(
          y1 < y2
            ? [x1, y1, x2, y2]
            : [x2, y2, x1, y1]
        );
      } else if (y1 === y2) {
        return coords.push(
          x1 < x2
            ? [x1, y1, x2, y2]
            : [x2, y2, x1, y1]
        );
      }

      const xDiff = x1 - x2;
      const yDiff = y1 - y2;
      const xDiffAbs = Math.abs(xDiff);
      const yDiffAbs = Math.abs(yDiff);

      if (xDiffAbs === yDiffAbs) {
        const from = x1 < x2 ? [x1, y1] : [x2, y2];
        const to = x1 > x2 ? [x1, y1] : [x2, y2];
        const yMultiplier = Math.sign(from[1] - to[1]) * -1;

        for (let i = 0; i <= xDiffAbs; i += 1) {
          coords.push([
            from[0] + i,
            from[1] + i * yMultiplier,
            from[0] + i,
            from[1] + i * yMultiplier,
          ]);
        }
      }
    })

  const size = coords.flat().reduce((max, v) => max >= v ? max : v, -Infinity) + 1;
  const matrix = new Array(size);

  for (let i = 0; i < size; i += 1) {
    matrix[i] = new Array(size).fill(0);
  }

  for (let i = 0; i < coords.length; i += 1) {
    const [x1, y1, x2, y2] = coords[i];
    if (x1 === x2) {
      for (let y = y1; y <= y2; y += 1) {
        matrix[y][x1] = (matrix[y][x1] || 0) + 1;
      }
    } else if (y1 === y2) {
      for (let x = x1; x <= x2; x += 1) {
        matrix[y1][x] = (matrix[y1][x] || 0) + 1;
      }
    }
  }

  let twoOrMoreOverlaps = 0;
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      if (matrix[i][j] >= 2) {
        twoOrMoreOverlaps += 1;
      }
    }
  }

  return twoOrMoreOverlaps;
}