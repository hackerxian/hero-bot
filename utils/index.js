/**
 * Created by xianda on 15/7/10.
 */

//var Pageres = require('pageres');
const qiniu = require('./qiniu');
const config = require('../config');
const weChatUrl = config.wechat.url;
const toutiao = require('./toutiao');
const urllib = require('urllib');

exports.getImg = function(url, filename, selector, size) {
  //var pageres = new Pageres({
  //  delay: 2,
  //  selector: selector,
  //  filename: filename
  //}).src(url, [size])
  //  .dest(__dirname);
  //
  //return function(callback) {
  //  pageres.run(callback);
  //};
};

exports.sendMessage = function* (message) {
  return yield urllib.request(weChatUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      "text": message.text,
      "desp": message.desp
    }
  });
};

exports.getTouTiao = toutiao.getTouTiao;

