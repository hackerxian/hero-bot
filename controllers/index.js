/**
 * 路由
 */
exports.home = function* () {
  this.body = 'hello world';
  this.status = 200;
};

exports.handle = function* () {
  var content = this.request.body;
  if (content.trigger_word === 'test') {
    this.body = {
      text: 'http://i.imgur.com/JQ8GA1p.jpg',
      "attachments": [
        {
          "fallback": "Network traffic (kb/s): How does this look? @slack-ops - Sent by Julie Dodd - https://datadog.com/path/to/event",
          "title": "Network traffic (kb/s)",
          "title_link": "https://datadog.com/path/to/event",
          "text": "How does this look? @slack-ops - Sent by Julie Dodd",
          "image_url": "https://datadoghq.com/snapshot/path/to/snapshot.png",
          "color": "#764FA5"
        }
      ]
    };
    this.status = 200;
  }
};