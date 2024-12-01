module.exports = (input) => {
  const entries = new Map();
  const updateEntry = (value, bump) => {
    const entry = entries.get(value) || [0, 0];
    entry[0] += bump[0];
    entry[1] += bump[1];
    entries.set(value, entry);
  };

  input.split("\n").forEach((line) => {
    const match = line.match(/(\d+)\s+(\d+)/);
    updateEntry(match[1], [1, 0]);
    updateEntry(match[2], [0, 1]);
  });

  return Array.from(entries).reduce((acc, [val, [seenLeft, seenRight]]) => {
    if (seenLeft === 0 || seenRight === 0) return acc;
    return Number(val) * seenRight + acc;
  }, 0);
};
