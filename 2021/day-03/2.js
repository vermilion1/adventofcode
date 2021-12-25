const getBit = (list, position) => {
  let zeros = 0;
  let ones = 0;

  for (let i = 0; i < list.length; i += 1) {
    list[i][position] === '0' ? zeros += 1 : ones += 1;
  }

  return {zeros, ones};
}

module.exports = input => {
  const lines = input.split('\n');

  let CO2Scrubber = lines.slice();
  let oxygenGenerator = lines.slice();
  let CO2ScrubberRating;
  let oxygenGeneratorRating;

  for (let i = 0; i < lines[0].length; i += 1) {
    const oxygenGeneratorBit = getBit(oxygenGenerator, i);
    const oxygenGeneratorValue = oxygenGeneratorBit.zeros === oxygenGeneratorBit.ones
      ? '1'
      : oxygenGeneratorBit.zeros > oxygenGeneratorBit.ones ? '0' : '1';
    oxygenGenerator = oxygenGenerator.filter(val => val[i] === oxygenGeneratorValue);
    if (oxygenGenerator.length === 1) {
      oxygenGeneratorRating = oxygenGenerator[0];
    }

    const CO2ScrubberBit = getBit(CO2Scrubber, i);
    const CO2ScrubberValue = CO2ScrubberBit.zeros === CO2ScrubberBit.ones
      ? '0'
      : CO2ScrubberBit.zeros > CO2ScrubberBit.ones ? '1' : '0';
    CO2Scrubber = CO2Scrubber.filter(val => val[i] === CO2ScrubberValue);
    if (CO2Scrubber.length === 1) {
      CO2ScrubberRating = CO2Scrubber[0];
    }
  }

  return parseInt(CO2ScrubberRating, 2) * parseInt(oxygenGeneratorRating, 2);
}