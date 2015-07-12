var later = require('later');

console.log("Now:"+new Date());
later.date.localTime();
var schedule = {
  schedules:
    [
      {h: [10], m: [15,45]},
      {h: [17], m: [30]}
    ]
};
var sched = later.parse.recur().on(8).hour();
var test = later.schedule(sched).next(10);
console.log(test)
