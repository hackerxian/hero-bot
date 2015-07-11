var urllib = require('urllib');
var config = require('../config');
var util = require('util');
var co = require('co');

var simiKey = config.simi.SIMSIMI_KEY;
var simiUrl = config.simi.url + '?key=%s&lc=ch&ft=1.0&text=%s';

exports.chat = function* (text) {
  var url = util.format(simiUrl, simiKey, text);
  console.log(url)
  var result = yield urllib.request(url, {
    dataType: 'json'
  });
  console.log(result)
  return result.data.response;
};

//exports.chat('为什么');
//co(function* (){
//  yield exports.chat('这是为什么');
//}).catch(function(err) {
//  console.error(err);
//});
