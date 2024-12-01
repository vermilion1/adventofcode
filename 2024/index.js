const fs = require("fs");

const args = process.argv.slice(2);
const dayNumber = args[0];
if (!dayNumber) {
  throw new Error("Please provide a day to run");
}

const tasks = args.slice(1).length ? args.slice(1) : [1, 2];
const dayPath = `./day-${dayNumber.padStart(2, "0")}`;
const input = fs.readFileSync(`${dayPath}/input.txt`, "utf8");

const heading = `Running day ${dayNumber}`;
console.log(heading);
console.log("-".repeat(heading.length + 1));

tasks.forEach(async (taskNumber) => {
  try {
    const task = require(`${dayPath}/${taskNumber}`);
    console.time(`Done in`);
    console.log(`Task #${taskNumber}:`, task(input));
    console.timeEnd();
  } catch (e) {
    throw new Error(e.stack);
  }
});

console.log();
