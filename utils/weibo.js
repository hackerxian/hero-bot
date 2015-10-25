
const getContent = require('../lib/spider');
const cheerio = require('cheerio');
const toMarkdown = require('to-markdown');
const fs = require('fs');
const path = require('path');

exports.getGitDaily = function* () {
  var Cookie = 'SUHB=0Ryr9-FWsUMJP2; _T_WM=9999d45b15f34759ddbf410f183a9f6d; gsid_CTandWM=4uJa57b01vfgNxMxTcf5no2xv89; H5_INDEX_TITLE=; SUB=_2A257KP4GDeTxGeNJ6VsX8ynJyzmIHXVY0oJOrDV6PUJbrdANLXHukW2LVdDUCw8IUSpLWLuyLtRBDvZaMg..';

  var url = 'http://weibo.cn/GitHubDaily';
  var content = yield getContent(url, Cookie);
  var dir = path.dirname(__dirname)
  var file = path.join(dir, 'log/weibo.txt');
  var $ = cheerio.load(content);
  var title = $('.c .ctt').first().html();
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
