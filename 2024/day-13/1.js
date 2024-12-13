module.exports = (input) => {
  const toNum = (s, re) => s.match(re).slice(1).map(Number);
  const setups = input.split("\n\n").map((s) => {
    return {
      a: toNum(s, /A: X\+(\d+), Y\+(\d+)/),
      b: toNum(s, /B: X\+(\d+), Y\+(\d+)/),
      prize: toNum(s, /X=(\d+), Y=(\d+)/),
    };
  });

  return setups.reduce((acc, setup) => {
    const maxA = Math.floor(setup.prize[0] / setup.a[0]);
    const maxB = Math.floor(setup.prize[0] / setup.b[0]);
    let result = 0;
    for (let a = 0; a <= maxA; a += 1) {
      for (let b = 0; b <= maxB; b += 1) {
        if (
          a * setup.a[0] + b * setup.b[0] === setup.prize[0] &&
          a * setup.a[1] + b * setup.b[1] === setup.prize[1]
        ) {
          const tokens = a * 3 + b;
          result = result ? Math.min(result, tokens) : tokens;
        }
      }
    }
    return acc + result;
  }, 0);
};
