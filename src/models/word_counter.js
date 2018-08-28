const PubSub = require('../helpers/pub_sub.js');

const WordCounter = function() {

};

WordCounter.prototype.bindEvents = function() {
  PubSub.subscribe('InputView:text-inputted', (event) => {
    // console.log(event.detail);
    const inputtedText = event.detail;
    const result = this.wordCount(inputtedText);
    // console.log(result);
    PubSub.publish('WordCounter:result', result);
  });
};

WordCounter.prototype.wordCount = function(inputtedText) {
    return inputtedText.split(" ").length;
  };


module.exports = WordCounter;
