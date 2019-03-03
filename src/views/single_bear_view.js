const PubSub = require('../helpers/pub_sub.js');



const SingleBeerView = function(element){
  this.element = element;
};

SingleBeerView.prototype.bindEvents = function(){
PubSub.subscribe('SelectView:change', (event) => {
    const selectedIndex = event.detail;
    console.log(selectedIndex);
    this.publishbeerData(selectedIndex);
  });
};




SingleBeerView.prototype.publishbeerData = function(beerIndex){
  const selectedbeer = this.data[beerIndex];
  PubSub.publish('Selected Beer data ready', selectedBeer);
};

module.exports = SingleBeerView
