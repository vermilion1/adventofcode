module.exports = (input) => {
  const orderingRules = input
    .match(/\d+\|\d+/g)
    .map((rule) => rule.split("|").map(Number));

  const updates = input
    .match(/\d+\,.*/g)
    .map((update) => update.split(",").map(Number));

  const sort = (update) =>
    update.sort((a, b) => {
      for (const rule of orderingRules) {
        if (rule[0] === a && rule[1] === b) return 1;
        if (rule[0] === b && rule[1] === a) return -1;
      }
      return 0;
    });

  return updates.reduce((acc, update) => {
    const isValid = update.every((page, pageIndex) => {
      return orderingRules.every((rule) => {
        if (rule[1] !== page) return true;
        const index = update.indexOf(rule[0]);
        return index === -1 || index < pageIndex;
      });
    });

    return isValid ? acc : acc + sort(update)[Math.floor(update.length / 2)];
  }, 0);
};
