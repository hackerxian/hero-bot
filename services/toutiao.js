'use strict';

var co = require('co');
var utils = require('../utils');


function* sendTouTiao() {
  let content = yield utils.getTouTiao();
  if (content) {
    yield utils.sendMessage(content);
    console.log('send ok');
  }
}

function onerror(err) {
  let content = {
    text: 'error',
    desp: err.message
  };
  co(function* (){
    yield utils.sendMessage(content)
  })
}

setInterval(function(){
  co(sendTouTiao).catch(onerror);
}, 5*60*1000);