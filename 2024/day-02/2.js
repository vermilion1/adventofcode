module.exports = (input) => {
  const validateReport = (levels) => {
    let isAscending = levels[1] > levels[0];

    for (let i = 1; i < levels.length; i++) {
      const diff = levels[i] - levels[i - 1];
      if ((diff <= 0 && isAscending) || (diff >= 0 && !isAscending)) {
        return false;
      }

      const absDiff = Math.abs(diff);
      if (absDiff < 1 || absDiff > 3) {
        return false;
      }
    }

    return true;
  };

  return input.split("\n").reduce((acc, line) => {
    const levels = line.split(" ").map(Number);
    const isValid = validateReport(levels);
    if (isValid) {
      return acc + 1;
    }

    for (let i = 0; i < levels.length; i += 1) {
      if (validateReport([...levels.slice(0, i), ...levels.slice(i + 1)])) {
        return acc + 1;
      }
    }

    return acc;
  }, 0);
};
