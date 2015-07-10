/**
 * 路由
 */
exports.home = function* () {
  this.body = 'hello world';
};

exports.handle = function* () {
  var content = this.request.body;
  console.log(content)
};