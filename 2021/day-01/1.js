module.exports = input => {
  return input.split('\n').map(Number)
    .filter((value, index, list) => value > list[index - 1])
    .length;
}