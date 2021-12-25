module.exports = input => {
  let position = 0;
  let depth = 0;

  input.split('\n').forEach(line => {
    const [command, value] = line.match(/(forward|up|down) (\d)+/).slice(1);
    switch(command) {
      case 'forward':
        position += Number(value);
        break;
      case 'up':
        depth += Number(value) * -1;
        break;
      case 'down':
        depth += Number(value);
        break;
    }
  });

  return position * depth;
}