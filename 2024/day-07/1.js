module.exports = (input) => {
  const map = input.split("\n").map((l) => {
    const split = l.split(": ");
    return [Number(split[0]), ...split[1].split(" ").map(Number)];
  });

  const evaluate = (target, acc, ...numbers) => {
    if (numbers.length === 0) {
      return acc === target;
    }
    const [nextNumber, ...restNumbers] = numbers;
    return (
      evaluate(target, acc + nextNumber, ...restNumbers) ||
      evaluate(target, acc * nextNumber, ...restNumbers)
    );
  };

  return map.reduce((acc, [target, ...numbers]) => {
    return acc + (evaluate(target, ...numbers) ? target : 0);
  }, 0);
};
