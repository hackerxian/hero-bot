var later = require('later');
var config = require('../config');
var urllib = require('urllib');
var co = require('co');

var randomInComingUrl = config.slack.randomInComingUrl;

console.log("Now:"+new Date());
later.date.localTime();
//var sched = later.parse.recur().on(15).hour();

var sched = later.parse.recur().on('15:17:00').time();

var task;
exports.sendSlack = function* (sched, action) {
  task = later.setInterval(function() {
    yield action();
  }, sched);
};

function* sendMessage() {
  var result = yield urllib.request(randomInComingUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      "text": "A very important thing has occurred! <https://alert-system.com/alerts/1234|Click here> for details!"
    }
  });
  console.log(result.data.toString())
}

co(function* (){
  yield exports.sendSlack(sched, sendMessage);
}).catch(function(err) {
  console.error(err);
});


