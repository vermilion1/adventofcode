module.exports = (input) => {
  return input.split("\n").reduce((acc, line) => {
    const levels = line.split(" ").map(Number);
    let isAscending = levels[1] > levels[0];

    for (let i = 1; i < levels.length; i++) {
      const diff = levels[i] - levels[i - 1];
      if ((diff <= 0 && isAscending) || (diff >= 0 && !isAscending)) {
        return acc;
      }

      const absDiff = Math.abs(diff);
      if (absDiff < 1 || absDiff > 3) {
        return acc;
      }
    }

    return acc + 1;
  }, 0);
};
