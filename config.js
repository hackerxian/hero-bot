
'use strict';

/**
 * Module dependencies.
 */

var version = require('./package.json').version;
var path = require('path');

var config = {
  version: version,
  debug: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 7001,
  qiniu: {
    ACCESS_KEY: 'pkKsrXSbgRnY9zUWKcJgMBngCusbXzONu4Nzithb',
    SECRET_KEY: 'c8tTHMsC1N5DuVt4TfvLyWSA7uSYCsJZFtZS_tUF',
    bucketname: 'herobot',
    bucketDomain: '7xkaof.com1.z0.glb.clouddn.com'
  }
};

module.exports = config;