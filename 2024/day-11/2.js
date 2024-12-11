module.exports = (input) => {
  const stones = input.split(" ");
  const cache = new Map();
  const fixStone = (stone) => String(Number(stone));
  const blink = (blinkTimes, stone) => {
    if (blinkTimes === 0) return 1;
    const key = `${blinkTimes}-${stone}`;
    let result = cache.get(key);
    if (result) return result;

    if (stone === "0") {
      result = blink(blinkTimes - 1, "1");
    } else if (stone.length % 2 === 0) {
      const half = stone.length / 2;
      result =
        blink(blinkTimes - 1, fixStone(stone.slice(0, half))) +
        blink(blinkTimes - 1, fixStone(stone.slice(half)));
    } else {
      result = blink(blinkTimes - 1, String(stone * 2024));
    }

    cache.set(key, result);
    return result;
  };

  return stones
    .map((stone) => blink(75, stone))
    .reduce((acc, val) => acc + val, 0);
};
