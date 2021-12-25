const boardSize = 5;

const sum = list => list.reduce((acc, curr) => acc + curr, 0);

const getBoards = (lines) => {
  const boards = [];
  let board = [];
  for (let i = 1; i < lines.length; i += 1) {
    if (lines[i]) {
      board.push(lines[i].split(' ').filter(Boolean).map(Number));
    }
    if (board.length === boardSize) {
      boards.push(board);
      board = [];
    }
  }
  return boards;
};

const getWinner = (boards, numbers) => {
  for (let i = 0; i < boards.length; i += 1) {
    const board = boards[i];
    const unmarked = [];

    let columnScore = [];
    let isRowMarked = false;
    for (let j = 0; j < boardSize; j += 1) {
      let rowScore = 0;
      for (let k = 0; k < boardSize; k += 1) {
        columnScore[k] = 0;
        if (numbers.includes(board[j][k])) {
          rowScore += 1;
          columnScore[k] += 1;
        } else {
          unmarked.push(board[j][k]);
        }
      }
      if (rowScore === boardSize) {
        isRowMarked = true;
      }
    }
    if (
      isRowMarked ||
      columnScore.find(score => score === boardSize)
    ) {
      return {board, unmarked};
    }
  }
};

module.exports = input => {
  const lines = input.split('\n');
  const numbers = lines[0].split(',').map(Number);
  const boards = getBoards(lines.slice(1));

  for (let i = 5; i < numbers.length; i += 1) {
    const winner = getWinner(boards, numbers.slice(0, i));
    if (winner) {
      const lastNumber = numbers[i - 1];
      const unmarkedSum = sum(winner.unmarked);
      return lastNumber * unmarkedSum;
    }
  }
}