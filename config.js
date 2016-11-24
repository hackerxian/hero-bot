
'use strict';

/**
 * Module dependencies.
 */

var version = require('./package.json').version;
var path = require('path');

var config = {
  version: version,
  debug: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 7002,
  qiniu: {
    ACCESS_KEY: '',
    SECRET_KEY: '',
    bucketname: '',
    bucketDomain: ''
  },
  simi: {
    url: 'http://www.tuling123.com/openapi/api',
    SIMSIMI_KEY: ''
  },
  slack: {
    randomInComingUrl: ''
  },
  wechat: {
    url: ''
  }

};

module.exports = config;
