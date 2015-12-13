'use strict';

const getContent = require('../lib/spider');
const cheerio = require('cheerio');
const _ = require('lodash');
const toMarkdown = require('to-markdown');
const fs = require('fs');
const path = require('path');

exports.getTouTiao = function* () {
  let url = 'http://toutiao.io/';
  let content = yield getContent(url);
  let dir = path.dirname(__dirname);
  let file = path.join(dir, 'log/toutiao.json');
  let $ = cheerio.load(content);
  let result = {};
  let time = $('#daily .daily .date small').text();
  let posts = {};
  let urls = [];
  $('#daily .daily .posts .post .title').each(function(){
    let $this = $(this);
    let title = $this.text().trim();
    let url = $this.find('a').attr('href');
    posts[url] = title;
    urls.push(url);
  });

  result.time = time;
  result.urls = urls;
  let oldContent = fs.readFileSync(file, 'utf-8');
  if (!oldContent) {
    return fs.writeFileSync(file, JSON.stringify(result));
  }
  oldContent = JSON.parse(oldContent);
  let oldUrls = oldContent.urls;
  let oldTime = oldContent.time;
  if (oldTime !== time) {
    fs.writeFileSync(file, JSON.stringify(result));
    return {
      text: '新的一天开始了',
      desp: '[快来看](http://toutiao.io/)'
    }
  }
  let diffUrls = _.difference(urls, oldUrls);
  if (!diffUrls.length) {
    return;
  }
  fs.writeFileSync(file, JSON.stringify(result));
  let desp = '';
  diffUrls.forEach(function(url) {
    let title = posts[url];
    desp += `- [${title}](${url})\n`;
  });
  return {
    text: '又有新的内容更新了',
    desp: desp
  }
};
