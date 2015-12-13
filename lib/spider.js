
'use strict';

var request = require('co-request');

module.exports = function* (url, Cookie) {
  let headers = {
    'Accept': 'text/html, application/xhtml+xml, */*',
    'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6,zh-TW;q=0.4',
    'Connection': 'keep-alive',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36',
    'Cookie': Cookie
  };

  if (!Cookie) {
    delete headers.Cookie;
  }
  let homePage = yield request({
    url: url,
    headers: headers
  });

  return homePage.body;
};