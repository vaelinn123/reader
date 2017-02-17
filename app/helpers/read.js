'use strict';
const say = require('say');

function readText(text, voice) {
  let toUse = voice;
  if(!voice){
    toUse = 'Alex';
  }
  return say.speak(text, toUse);
};

module.exports = {
  readText,
}
