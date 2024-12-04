module.exports = (input) => {
  let isAllowed = true;
  const match = input.trim().match(/do(n\'t)?\(\)|mul\(([0-9]+),([0-9]+)\)/g);
  return match.reduce((acc, mul) => {
    if (mul === "do()" || mul === "don't()" || !isAllowed) {
      isAllowed = mul === "do()";
      return acc;
    }

    const match = mul.match(/mul\(([0-9]+),([0-9]+)\)/);
    return acc + match[1] * match[2];
  }, 0);
};
