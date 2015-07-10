/**
 * Created by xianda on 15/7/10.
 */

var Pageres = require('pageres');
var qiniu = require('./qiniu');
var os = require('os');


exports.getImg = function(url, filename, selector, size) {
  var pageres = new Pageres({
    delay: 2,
    selector: selector,
    filename: filename
  }).src(url, [size])
    .dest(__dirname);

  return function(callback) {
    pageres.run(callback);
  };
};