module.exports = input => {
  let position = 0;
  let depth = 0;
  let aim = 0;

  input.split('\n').forEach(line => {
    const [command, value] = line.match(/(forward|up|down) (\d)+/).slice(1);
    const units = Number(value);
    switch(command) {
      case 'forward':
        position += units;
        depth += aim * units;
        break;
      case 'up':
        aim += units * -1;
        break;
      case 'down':
        aim += units;
        break;
    }
  });

  return position * depth;
}