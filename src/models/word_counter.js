const PubSub = require('../helpers/pub_sub.js');

const WordCounter = function() {

};

WordCounter.prototype.bindEvents = function() {

};

WordCounter.prototype.wordCount = function(stringToCount, separator) {
  // const separator = " ";

  const arrayOfStrings = stringToCount.split(separator);
  return `The text you entered has ${arrayOfStrings.length}`
};


module.exports = WordCounter;
