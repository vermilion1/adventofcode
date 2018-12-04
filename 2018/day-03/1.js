'use strict';

module.exports = input => {
  const claims = input.split('\n');
  const re = /(\d+),(\d+): (\d+)x(\d+)/;

  const EMPTY = '.';
  const TAKEN = '0';
  const OVERLAP = 'X';

  const getInfo = claim => {
    const [, x, y, w, h] = claim.match(re);
    return {
      x: Number(x),
      y: Number(y),
      w: Number(w),
      h: Number(h),
    }
  };

  const width = Math.max(...claims.map(claim => getInfo(claim).x + getInfo(claim).w));
  const height = Math.max(...claims.map(claim => getInfo(claim).y + getInfo(claim).h));

  const matrix = [];
  for (let i = 0; i < height; i++) {
    matrix[i] = new Array(width).fill(EMPTY);
  }

  let inchesOverlap = 0;
  for (let i = 0; i < claims.length; i ++) {
    const { x, y, w, h } = getInfo(claims[i]);

    for (let yIndex = y; yIndex < y + h; yIndex++) {
      for (let xIndex = x; xIndex < x + w; xIndex++) {
        const currentValue = matrix[yIndex][xIndex];
        inchesOverlap += currentValue === TAKEN;
        matrix[yIndex][xIndex] = currentValue === EMPTY ? TAKEN : OVERLAP;
      }
    }
  }

  return inchesOverlap;
};
