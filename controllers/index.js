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
  var text = content.trigger_word;
  if (text === 'test') {
    yield utils.getImg('http://finance.sina.com.cn/stock/','test2', '#wmt_contents', 'iphone 5s');
    this.body = {
      text: 'http://i.imgur.com/JQ8GA1p.jpg',
      "attachments": [
        {
          "fallback": "Network traffic (kb/s): How does this look? @slack-ops - Sent by Julie Dodd - https://datadog.com/path/to/event",
          "title": "Network traffic (kb/s)",
          "title_link": "https://datadog.com/path/to/event",
          "text": "How does this look? @slack-ops - Sent by Julie Dodd",
          "image_url": "http://i.imgur.com/JQ8GA1p.jpg",
          "color": "#764FA5"
        }
      ]
    };
  } else {
    var reply = yield simi.chat(text);
    this.body = {
      text: reply
    }
  }
};