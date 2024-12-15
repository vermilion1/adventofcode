module.exports = (input) => {
  const ROBOT = "@";
  const BOX = "O";
  const WALL = "#";
  const EMPTY_SPACE = ".";
  const directionsMap = {
    ">": [0, 1],
    v: [1, 0],
    "<": [0, -1],
    "^": [-1, 0],
  };

  const [mapStr, directionsStr] = input.split("\n\n");
  const map = mapStr.split("\n").map((line) => line.split(""));
  const moves = directionsStr
    .split("\n")
    .flatMap((line) => line.split("").map((d) => directionsMap[d]));

  let robotPosition;

  const countGpsSum = () => {
    let sum = 0;
    for (let y = 0; y < map.length; y += 1) {
      for (let x = 0; x < map[y].length; x += 1) {
        if (getObject([y, x]) === BOX) {
          sum += 100 * y + x;
        }
      }
    }
    return sum;
  };

  const getObject = ([y, x]) => map[y][x];
  const setObject = ([y, x], object) => (map[y][x] = object);

  const move = (offset) => {
    const axis = offset[0] !== 0 ? 0 : 1;
    let step = 1;
    let nextObject;

    while (true) {
      const clone = [...robotPosition];
      clone[axis] += offset[axis] * step;
      nextObject = getObject(clone);
      if (nextObject === EMPTY_SPACE) {
        if (step > 1) setObject(clone, BOX);
        setObject(robotPosition, EMPTY_SPACE);
        robotPosition[axis] += offset[axis];
        setObject(robotPosition, ROBOT);
        return;
      } else if (nextObject === WALL) {
        return;
      }
      step += 1;
    }
  };

  for (let y = 0; y < map.length; y += 1) {
    const x = map[y].indexOf(ROBOT);
    if (x !== -1) {
      robotPosition = [y, x];
      break;
    }
  }

  while (moves.length) {
    move(moves.shift());
  }

  return countGpsSum(map);
};
