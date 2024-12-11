module.exports = (input) => {
  const stones = input.split(" ");
  const fixStone = (stone) => String(Number(stone));
  const blink = (blinkTimes, stones) => {
    while (blinkTimes > 0) {
      const updated = [];
      stones.forEach((stone) => {
        if (stone === "0") {
          updated.push("1");
        } else if (stone.length % 2 === 0) {
          const half = stone.length / 2;
          updated.push(fixStone(stone.slice(0, half)));
          updated.push(fixStone(stone.slice(half)));
        } else {
          updated.push(String(stone * 2024));
        }
      });
      blinkTimes -= 1;
      stones = updated;
    }
    return stones;
  };

  return blink(25, stones).length;
};
