'use strict';

var fs = require('fs');
var args = process.argv.slice(2);

var dayNumber = args[0];
if (dayNumber === void 0) {
  throw new Error('Please provide a day to run');
}

var tasks = args.slice(1).length ? args.slice(1) : [1, 2];
var dayPath = './day-' + ('0' + dayNumber).slice(-2);
var input = String(fs.readFileSync(dayPath + '/input.txt'));

var heading = 'Running day ' + dayNumber;
console.log(heading);
console.log(new Array(heading.length + 1).join('-'));

tasks.forEach(taskNumber => {
  try {
    var task = require([dayPath, taskNumber].join('/'));
    var timeLabel = 'Done in';
    console.time(timeLabel);
    console.log(`Task #${taskNumber}:`, task(input));
    console.timeEnd(timeLabel);
  }
  catch (e) {
    throw new Error(e.stack);
  }
});

console.log();
