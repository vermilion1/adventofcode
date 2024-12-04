module.exports = (input) => {
  const match = input.trim().match(/mul\(([0-9]+),([0-9]+)\)/g);
  return match.reduce((acc, mul) => {
    const match = mul.match(/mul\(([0-9]+),([0-9]+)\)/);
    return acc + match[1] * match[2];
  }, 0);
};
