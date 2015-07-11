/**
 * 路由
 */
var utils = require('../utils');
var simi = require('../services/simi');

exports.home = function* () {
  this.body = 'hello world';
  this.status = 200;
};


exports.handle = function* () {
  var content = this.request.body;
  console.log(content)
  var trigger_word = content.trigger_word;
  var text = content.text;
  if (trigger_word === 'test') {
    //yield utils.getImg('http://finance.sina.com.cn/stock/','test2', '#wmt_contents', 'iphone 5s');
    //this.body = {
    //  text: 'http://i.imgur.com/JQ8GA1p.jpg',
    //  "attachments": [
    //    {
    //      "fallback": "Network traffic (kb/s): How does this look? @slack-ops - Sent by Julie Dodd - https://datadog.com/path/to/event",
    //      "title": "Network traffic (kb/s)",
    //      "title_link": "https://datadog.com/path/to/event",
    //      "text": "How does this look? @slack-ops - Sent by Julie Dodd",
    //      "image_url": "http://i.imgur.com/JQ8GA1p.jpg",
    //      "color": "#764FA5"
    //    }
    //  ]
    //};
  }
  if (text) {
    var reply = yield simi.chat(text);
    console.log(reply)
    this.body = {
      text: reply
    };
    this.status = 200;
  }
};