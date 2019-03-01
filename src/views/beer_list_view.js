const PubSub = require("../helpers/pub_sub.js");
const BeerWrapperView = require("./beer_wrapper_view.js");




const BeerListView = function(container) {
  this.container = container;
};

BeerListView.prototype.bindEvents = function () {
  PubSub.subscribe("beer list data is ready", (event) => {
    this.beers = event.detail;
    this.display();
  });
};

BeerListView.prototype.display = function () {
  this.beers.forEach((beer) => {
    const beerWrapperView = new BeerWrapperView(this.container, beer);
    beerWrapperView.render();
  });
};

module.exports = BeerListView;
