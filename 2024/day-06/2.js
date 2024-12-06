module.exports = (input) => {
  const createMap = () => input.split("\n").map((l) => l.split(""));
  const getGuardPosition = (map) => {
    for (let i = 0; i < map.length; i += 1) {
      const index = map[i].join("").search(/[<>^v]/);
      if (index !== -1) {
        return [i, index];
      }
    }
  };

  const originalMap = createMap();
  const originalGuardPosition = getGuardPosition(originalMap);

  const setPositionValue = (map, [y, x], value) => (map[y][x] = value);
  const getPositionValue = (map, [y, x]) => map[y][x];

  const isPositionOnTheMap = (map, position) =>
    position[0] >= 0 &&
    position[0] <= map.length &&
    position[1] >= 0 &&
    position[1] <= map[0].length;

  const moveGuard = (map, guardPosition) => {
    const direction = getPositionValue(map, guardPosition);

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

    setPositionValue(map, guardPosition, "X");

    const nextPos = getPositionValue(map, [
      guardPosition[0] + offset[0],
      guardPosition[1] + offset[1],
    ]);

    if (nextPos !== "#") {
      guardPosition[0] += offset[0];
      guardPosition[1] += offset[1];
      setPositionValue(map, guardPosition, direction);
    } else {
      setPositionValue(map, guardPosition, directionChange);
    }
  };

  // Calculate the guard path
  try {
    const guardPosition = [...originalGuardPosition];
    while (true) {
      moveGuard(originalMap, guardPosition);
    }
  } catch {}

  let obstacles = 0;

  for (let y = 0; y < originalMap.length; y += 1) {
    for (let x = 0; x < originalMap[y].length; x += 1) {
      // Skip paths the guard doesn't take
      if (getPositionValue(originalMap, [y, x]) !== "X") continue;

      const map = createMap();
      const guardPosition = [...originalGuardPosition];
      const visitedPositions = new Map();

      if (
        // Can't place the obstacle instead of the guard
        (y === guardPosition[0] && x === guardPosition[1]) ||
        // Can't place the obstacle right in front of the guard
        (y - 1 === guardPosition[0] && x === guardPosition[1]) ||
        // Already an obstacle
        getPositionValue(map, [y, x]) === "#"
      ) {
        continue;
      }

      // Set the obstacle
      setPositionValue(map, [y, x], "#");

      try {
        while (isPositionOnTheMap(map, guardPosition)) {
          visitedPositions.set(
            guardPosition.join(),
            getPositionValue(map, guardPosition).concat(
              visitedPositions.get(guardPosition.join()) || []
            )
          );

          moveGuard(map, guardPosition);

          const visitedPosition = visitedPositions.get(guardPosition.join());
          const hasLooped =
            visitedPosition &&
            visitedPosition.length !== new Set(visitedPosition).size;

          if (hasLooped) {
            obstacles += 1;
            break;
          }
        }
      } catch {}
    }
  }

  return obstacles;
};
