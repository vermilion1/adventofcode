const sum = list => list.reduce((acc, curr) => acc + curr, 0);

module.exports = input => {
  return input.split('\n').map(Number)
    .filter((value, index, list) => {
      const previous = list.slice(index - 3, index);
      const current = list.slice(index - 2, index + 1);
      if (previous.length === 3 && current.length === 3) {
        return sum(previous) < sum(current);
      }
    })
    .length;
}