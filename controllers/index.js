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
      text: 'hello world'
    };
    this.status = 200;
  }
};