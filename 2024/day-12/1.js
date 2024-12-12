module.exports = (input) => {
  const map = input.split("\n").map((row) => row.split(""));

  const visited = new Set();
  const directions = [
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 0],
  ];

  const isVisited = (position) => visited.has(position.join());
  const setVisited = (position) => visited.add(position.join());

  const getArea = (position) => {
    setVisited(position);

    const area = [];
    const stack = [position];

    while (stack.length > 0) {
      const currentPosition = stack.pop();
      const [y, x] = currentPosition;

      area.push(currentPosition);

      for (const direction of directions) {
        const yPos = y + direction[0];
        const xPos = x + direction[1];
        const newPosition = [yPos, xPos];
        if (map[yPos]?.[xPos] === map[y][x] && !isVisited(newPosition)) {
          stack.push(newPosition);
          setVisited(newPosition);
        }
      }
    }

    return area;
  };

  const calcPerimeter = (area) =>
    area.reduce((acc, [y, x]) => {
      let increase = 0;
      for (const direction of directions) {
        const yPos = y + direction[0];
        const xPos = x + direction[1];
        if (!map[yPos]?.[xPos] || map[yPos][xPos] !== map[y][x]) {
          increase += 1;
        }
      }
      return acc + increase;
    }, 0);

  const areas = [];

  for (let y = 0; y < map.length; y += 1) {
    for (let x = 0; x < map[y].length; x += 1) {
      const position = [y, x];
      if (!isVisited(position)) {
        areas.push(getArea(position));
      }
    }
  }

  return areas.reduce(
    (acc, area) => acc + area.length * calcPerimeter(area),
    0
  );
};
