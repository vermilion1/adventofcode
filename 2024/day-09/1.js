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

  let result = 0;
  for (let i = 0; i < list.length; i += 1) {
    if (list[i] === ".") {
      while (list[list.length - 1] === ".") {
        list.pop();
      }
      result += i * list.pop();
    } else {
      result += i * list[i];
    }
  }

  return result;
};
