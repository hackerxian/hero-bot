var urllib = require('urllib');
var config = require('../config');
var util = require('util');
var co = require('co');

var simiKey = config.simi.SIMSIMI_KEY;
var simiUrl = config.simi.url;

exports.chat = function* (text) {
  var result = yield urllib.request(simiUrl, {
    dataType: 'json',
    data: {
      key: simiKey,
      lc: 'ch',
      ft: '1.0',
      text: text
    }
  });
  return result.data.response;
};

//co(function* (){
//  yield exports.chat('这是为什么');
//}).catch(function(err) {
//  console.error(err);
//});
