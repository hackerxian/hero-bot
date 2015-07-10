var qiniu = require('qiniu');
var config = require('../config');
var bucketname = config.qiniu.bucketname;
var bucketDomain = config.qiniu.bucketDomain;
var token = uptoken(bucketname);

qiniu.conf.ACCESS_KEY = config.qiniu.ACCESS_KEY;
qiniu.conf.SECRET_KEY = config.qiniu.SECRET_KEY;

/**
 * 上传文件
 * @param key 文件名
 * @param localFile
 * @returns {*}
 */
exports.uploadFile = function* (key, localFile){
  var extra = new qiniu.io.PutExtra();
  var ret = yield putFile(token, key, localFile, extra);
  return ret[0];
};

/**
 * 获取文件的url
 * @param key 文件名
 * @returns {*}
 */
exports.getUrl = function(key) {
  return qiniu.rs.makeBaseUrl(bucketDomain, key); // bucketDomain为空间域名
};

/**
 * 获取文件列表，参数可不填
 * @param prefix 文件前缀
 * @param marker
 * @param limit
 * @returns {*}
 */
exports.getFileList = function* (prefix, marker, limit) {
  var ret = yield listFiles(bucketname, prefix, marker, limit);
  return ret[0];
};

/**
 * 批量删除
 * @param files
 * [{ key: 'test.png',
      hash: 'FssQNB4-_qtF8LwwmhxJftykxadE',
      fsize: 9,
      mimeType: 'image/png',
      putTime: 14365338235487884 }]
 * @returns {*}
 */
exports.batchDelete = function* (files) {
  var paths = files.map(function(file) {
    return new qiniu.rs.EntryPath(bucketname, file.key);
  });
  var ret = yield deleteFiles(paths);
  return ret[0];
};

/**
 * get upload token
 * @param bucketname
 */
function uptoken(bucketname) {
  var putPolicy = new qiniu.rs.PutPolicy(bucketname);
  return putPolicy.token();
}

function listFiles(bucketname, prefix, marker, limit) {
  return function(callback) {
    return qiniu.rsf.listPrefix(bucketname, prefix, marker, limit, callback);
  };
}

function putFile(uptoken, key, localFile, extra) {
  return function(callback) {
    return qiniu.io.put(uptoken, key, localFile, extra, callback);
  };
}

function deleteFiles(paths) {
  return function(callback) {
    var client = new qiniu.rs.Client();
    return client.batchDelete(paths, callback);
  };
}