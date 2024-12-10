module.exports = (input) => {
  const grid = input.split("\n").map((row) => row.split("").map(Number));
  const trailheads = grid.flatMap((row, y) =>
    row.map((val, x) => val === 0 && [y, x]).filter(Boolean)
  );

  const directions = [
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 0],
  ];

  const getNeighboringHeightPosition = (
    [currentY, currentX],
    lookingForHeight
  ) =>
    directions
      .map(([directionY, directionX]) => {
        const y = currentY + directionY;
        const x = currentX + directionX;
        return grid[y]?.[x] === lookingForHeight && [y, x];
      })
      .filter(Boolean);

  const scores = trailheads.map((trailhead) => {
    const visited = new Set();

    let stack = [trailhead];
    let score = 0;
    let position;

    while ((position = stack.pop())) {
      const key = position.join();

      if (visited.has(key)) continue;
      visited.add(key);

      const [y, x] = position;
      if (grid[y][x] === 9) {
        score += 1;
      } else {
        stack = [
          ...stack,
          ...getNeighboringHeightPosition(position, grid[y][x] + 1),
        ];
      }
    }

    return score;
  });

  return scores.reduce((acc, val) => acc + val);
};
