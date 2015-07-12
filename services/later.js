var later = require('later');
var config = require('../config');
var urllib = require('urllib');
var co = require('co');

var randomInComingUrl = config.slack.randomInComingUrl;

console.log("Now:"+new Date());
later.date.localTime();
//var sched = later.parse.recur().on(15).hour();

//var sched = later.parse.recur().every(2).second();
var sched = later.parse.recur().on('15:30:00').time();

var task;
exports.sendSlack = function (sched, action) {
  task = later.setInterval(function () {
    console.log('enter')
    co(function* (){
      yield action();
    }).catch(function(err) {
      console.error(err);
    });
  }, sched);
};

function* sendMessage() {
  var result = yield urllib.request(randomInComingUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      "text": "hello world"
    }
  });
  console.log(result.data.toString())
}

exports.sendSlack(sched, sendMessage);

//co(function* (){
//  yield exports.sendSlack(sched, sendMessage);
//}).catch(function(err) {
//  console.error(err);
//});


