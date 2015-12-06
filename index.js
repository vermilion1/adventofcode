'use strict';

var fs = require('fs');
var args = process.argv.slice(2);

var dayNumber = args[0];
if (dayNumber === void 0) {
  throw new Error('Please provide a day to run');
}

var tasks = args.slice(1).length ? args.slice(1) : [1, 2];
var dayPath = './day-' + dayNumber;
var input = String(fs.readFileSync(dayPath + '/input.txt'));

var heading = 'Running day ' + dayNumber;
console.log(heading);
console.log(new Array(heading.length + 1).join('-'));

tasks.forEach(taskNumber => {
  try {
    var task = require([dayPath, taskNumber].join('/'));
    var result = task(input);
    console.log(`Task ${taskNumber}:`, result);
  }
  catch (e) {
    var message = `Task number ${taskNumber} for day ${dayNumber} is not found.`;
    throw new Error(message);
  }
});

console.log();
