const fs = require("fs");

const [dayNumber, ...tasksInput] = process.argv.slice(2);
if (!dayNumber) {
  throw new Error("Please provide a day to run");
}

const tasks = tasksInput.length ? tasksInput : [1, 2];
const dayPath = `./day-${dayNumber.padStart(2, "0")}`;
const input = fs.readFileSync(`${dayPath}/input.txt`, "utf8");

const heading = `Running day ${dayNumber}`;
console.log(heading);
console.log("-".repeat(heading.length));

(async () => {
  for (const taskNumber of tasks) {
    try {
      const task = require(`${dayPath}/${taskNumber}`);
      const start = performance.now();
      const result = await task(input);
      const duration = performance.now() - start;
      console.log(`Task #${taskNumber}: ${result} (${duration.toFixed(2)}ms)`);
    } catch (e) {
      throw new Error(e.stack);
    }
  }
})();
