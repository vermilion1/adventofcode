module.exports = (input) => {
  const left = [];
  const right = [];

  input.split("\n").forEach((line) => {
    const match = line.match(/(\d+)\s+(\d+)/);
    left.push(Number(match[1]));
    right.push(Number(match[2]));
  });

  left.sort((a, b) => b - a);
  right.sort((a, b) => b - a);

  return left.reduce((acc, val, index) => {
    return Math.abs(val - right[index]) + acc;
  }, 0);
};
