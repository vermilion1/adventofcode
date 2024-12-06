module.exports = (input) => {
  const map = input.split("\n").map((l) => l.split(""));
  const getGuardPosition = () => {
    for (let i = 0; i < map.length; i += 1) {
      const index = map[i].join("").search(/[<>^v]/);
      if (index !== -1) {
        return [i, index];
      }
    }
  };

  const setPosition = ([y, x], value) => (map[y][x] = value);
  const getPosition = ([y, x]) => map[y][x];

  const moveGuard = () => {
    const direction = getPosition(guardPosition);

    let offset;
    let directionChange;

    switch (direction) {
      case "^": {
        offset = [-1, 0];
        directionChange = ">";
        break;
      }
      case ">": {
        offset = [0, 1];
        directionChange = "v";
        break;
      }
      case "v": {
        offset = [1, 0];
        directionChange = "<";
        break;
      }
      case "<": {
        offset = [0, -1];
        directionChange = "^";
        break;
      }
    }

    setPosition(guardPosition, "X");

    const nextPos = getPosition([
      guardPosition[0] + offset[0],
      guardPosition[1] + offset[1],
    ]);

    if (nextPos !== "#") {
      guardPosition[0] += offset[0];
      guardPosition[1] += offset[1];
      setPosition(guardPosition, direction);
    } else {
      setPosition(guardPosition, directionChange);
    }
  };

  let guardPosition = getGuardPosition();

  try {
    while (true) {
      moveGuard();
    }
  } catch (e) {
    return map.reduce(
      (acc, line) => acc + line.filter((i) => i === "X").length,
      0
    );
  }
};
