
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
  },
  simi: {
    url: 'http://sandbox.api.simsimi.com/request.p',
    //SIMSIMI_KEY: '50c086cb-5ea3-4190-bdd6-69787a540ec4'
    SIMSIMI_KEY: '3065f890-8ec0-4f3a-aa21-031c8cce7967'
  },
  slack: {
    randomInComingUrl: 'https://hooks.slack.com/services/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'
  }

};

module.exports = config;