module.exports = (input) => {
  let id = 0;
  let list = [];
  for (let i = 0; i < input.length; i += 1) {
    if (i % 2 === 0) {
      list.push(...Array.from({ length: input[i] }).fill(id));
    } else {
      list.push(...".".repeat(input[i]));
      id += 1;
    }
  }

  const getBlock = (start, direction) => {
    let block = list[start];
    let result = [];
    while (block === list[start]) {
      result.push(block);
      start += 1 * direction;
    }
    return result;
  };

  const updateList = (start, end, value) => {
    for (let i = start; i < end; i += 1) {
      list[i] = value;
    }
  };

  for (let i = list.length - 1; i >= 0; i -= 1) {
    if (list[i] === ".") continue;
    const block = getBlock(i, -1);
    for (let j = 0; j < i; j += 1) {
      if (list[j] !== ".") continue;
      const space = getBlock(j, 1);
      if (space.length >= block.length) {
        updateList(j, j + block.length, block[0]);
        updateList(i - block.length + 1, i + 1, space[0]);
        break;
      }
    }
    i -= block.length - 1;
  }

  let result = 0;
  for (let i = 0; i < list.length; i += 1) {
    if (list[i] !== ".") {
      result += i * list[i];
    }
  }

  return result;
};
