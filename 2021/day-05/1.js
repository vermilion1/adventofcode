module.exports = input => {
  const coords = input
    .split('\n')
    .map(line => {
      const match = line.split(/(\d+),(\d+) -> (\d+),(\d+)/)
      if (match) {
        const [x1, y1, x2, y2] = match.slice(1).map(Number);
        if (x1 === x2) {
          return y1 < y2
            ? [x1, y1, x2, y2]
            : [x2, y2, x1, y1];
        } else if (y1 === y2) {
          return x1 < x2
            ? [x1, y1, x2, y2]
            : [x2, y2, x1, y1];
        }
      }
    })
    .filter(Boolean)

  const size = Math.max(...coords.flat()) + 1;
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