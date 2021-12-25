module.exports = input => {
  const lines = input.split('\n');

  let gamma = '';
  let epsilon = '';

  for (let i = 0; i < lines[0].length; i += 1) {
    let zeros = 0;
    let ones = 0;

    for (let j = 0; j < lines.length; j += 1) {
      lines[j][i] === '0' ? zeros += 1 : ones += 1;
    }

    if (zeros > ones) {
      gamma += '0';
      epsilon += '1';
    } else {
      gamma += '1';
      epsilon += '0';
    }
  }

  return parseInt(gamma, 2) * parseInt(epsilon, 2);
}