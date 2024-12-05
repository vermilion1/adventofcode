module.exports = (input) => {
  const orderingRules = input
    .match(/\d+\|\d+/g)
    .map((rule) => rule.split("|").map(Number));

  const updates = input
    .match(/\d+\,.*/g)
    .map((update) => update.split(",").map(Number));

  return updates.reduce((acc, update) => {
    const isValid = update.every((page, pageIndex) => {
      return orderingRules.every((rule) => {
        if (rule[1] !== page) return true;
        const index = update.indexOf(rule[0]);
        return index === -1 || index < pageIndex;
      });
    });

    return isValid ? acc + update[Math.floor(update.length / 2)] : acc;
  }, 0);
};
