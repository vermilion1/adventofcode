module.exports = (input) => {
  const GRID = [101, 103];
  const robots = input.split("\n").map((robot) => {
    const [px, py, vx, vy] = robot
      .match(/p=(\d+),(\d+) v=(-?\d+),(-?\d+)/)
      .slice(1)
      .map(Number);
    return { position: [px, py], velocity: [vx, vy] };
  });

  const count = (robots) => {
    const skipX = Math.floor(GRID[0] / 2);
    const skipY = Math.floor(GRID[1] / 2);
    const quarters = [0, 0, 0, 0];
    for (const {
      position: [x, y],
    } of robots) {
      if (x === skipX || y === skipY) continue;
      const quarter = x < skipX ? (y < skipY ? 1 : 2) : y < skipY ? 0 : 3;
      quarters[quarter] += 1;
    }
    return quarters;
  };

  for (let i = 0; i < 100; i += 1) {
    robots.forEach(({ position, velocity }) => {
      position[0] = (position[0] + velocity[0] + GRID[0]) % GRID[0];
      position[1] = (position[1] + velocity[1] + GRID[1]) % GRID[1];
    });
  }

  return count(robots).reduce((acc, count) => acc * count, 1);
};
