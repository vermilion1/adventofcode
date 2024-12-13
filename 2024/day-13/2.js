module.exports = (input) => {
  const toNum = (s, re) => s.match(re).slice(1).map(Number);
  const setups = input.split("\n\n").map((s) => {
    return {
      a: toNum(s, /A: X\+(\d+), Y\+(\d+)/),
      b: toNum(s, /B: X\+(\d+), Y\+(\d+)/),
      prize: toNum(s, /X=(\d+), Y=(\d+)/).map((pos) => pos + 10000000000000),
    };
  });

  return setups.reduce((acc, { a: [ax, ay], b: [bx, by], prize: [px, py] }) => {
    // Copied from the Internets, it would take me more time than I have

    const aPress = (px * by - bx * py) / (by * ax - bx * ay);
    const bPress = (py * ax - ay * px) / (by * ax - bx * ay);

    if (Number.isInteger(aPress) && Number.isInteger(bPress)) {
      return acc + aPress * 3 + bPress;
    }

    return acc;
  }, 0);
};
