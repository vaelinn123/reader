'use strict';
const say = require('say');

function readText(text) {
  return say.speak(text);
};

module.exports = {
  readText,
}
