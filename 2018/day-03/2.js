'use strict';

module.exports = input => {
  const claims = input.split('\n');
  const re = /#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/;

  const EMPTY = '.';
  const OVERLAP = 'X';

  const getInfo = claim => {
    const [, id, x, y, w, h] = claim.match(re);
    return {
      id: Number(id),
      x: Number(x),
      y: Number(y),
      w: Number(w),
      h: Number(h),
    }
  };

  const width = Math.max(...claims.map(claim => getInfo(claim).x + getInfo(claim).w));
  const height = Math.max(...claims.map(claim => getInfo(claim).y + getInfo(claim).h));
  const ids = claims.map(claim => getInfo(claim).id);

  const removeId = id => {
    const index = ids.indexOf(id);
    if (index !== -1) {
      ids.splice(index, 1);
    }
  };

  const matrix = [];
  for (let i = 0; i < height; i++) {
    matrix[i] = new Array(width).fill(EMPTY);
  }

  for (let i = 0; i < claims.length; i ++) {
    const { id, x, y, w, h } = getInfo(claims[i]);

    for (let yIndex = y; yIndex < y + h; yIndex++) {
      for (let xIndex = x; xIndex < x + w; xIndex++) {
        const currentValue = matrix[yIndex][xIndex];
        if (currentValue !== EMPTY) {
          removeId(id);
          removeId(currentValue);
        }
        matrix[yIndex][xIndex] = currentValue === EMPTY ? id : OVERLAP;
      }
    }
  }

  return ids[0];
};
