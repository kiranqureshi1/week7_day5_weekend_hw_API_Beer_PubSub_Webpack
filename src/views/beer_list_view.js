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

  PubSub.subscribe('Selected Beer data ready', (event) => {
    const singleBeerInfo = event.detail;
    console.log(singleBeerInfo);
    this.displaySingleBeer(singleBeerInfo);
  });
};


BeerListView.prototype.display = function () {
  this.beers.forEach((beer) => {
    const beerWrapperView = new BeerWrapperView(this.container, beer);
    beerWrapperView.render();
  });
};

BeerListView.prototype.displaySingleBeer = function(beer){
  const infoHeading = document.createElement('h1');
  infoHeading.textContent = `${beer.name}`;
  const infoLiA = document.createElement('li');
  infoLiA.textContent = `${beer.description}`;
  const infoLiB = document.createElement('li');
  infoLiB.textContent = `${beer.first_brewed}`;
  const infoLiC = document.createElement('li');
  infoLiC.textContent = `${beer.tagline}`;
  const infoLiD = document.createElement("img");
  infoLiD.classList.add('image-size');
  infoLiD.src = `${beer.image_url}`;
  this.container.innerHTML = '';
  this.container.appendChild(infoHeading);
  this.container.appendChild(infoLiA);
  this.container.appendChild(infoLiB);
  this.container.appendChild(infoLiB);
  this.container.appendChild(infoLiB);
};

module.exports = BeerListView;
