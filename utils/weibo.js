
const getContent = require('../lib/spider');
const cheerio = require('cheerio');
const toMarkdown = require('to-markdown');
const fs = require('fs');
const path = require('path');

exports.getGitDaily = function* () {
  var Cookie = 'SUHB=0Ryr9-FWsUMJP2; _T_WM=9999d45b15f34759ddbf410f183a9f6d; SUB=_2A257MPX8DeTxGeNJ6VsX8ynJyzmIHXVY2pu0rDV6PUJbrdANLVbjkW2YdM5mLj4JVbZdnGJ-ayw9GDRZBw..; gsid_CTandWM=4urrd0fb1tseAAFLGnxU8o2xv89';

  var url = 'http://weibo.cn/GitHubDaily';
  var content = yield getContent(url, Cookie);
  var dir = path.dirname(__dirname)
  var file = path.join(dir, 'log/weibo.txt');
  var $ = cheerio.load(content);
  var title = $('.c .ctt').first().html();
  if (!title) {
    return {
      text: 'Cookie失效',
      desp: '请更新Cookie'
    };
  }
  var titleStr = title.substring(0, 10);
  var fileContent = fs.readFileSync(file, 'utf-8');
  if (titleStr !== fileContent) {
    fs.writeFileSync(file, titleStr);
    var html = $('.c').first().html();
    return {
      text: title,
      desp: toMarkdown(html)
    };
  }
  return '';
};
