const BeerWrapperView = function(beerContainer, beer) {
  this.beerContainer = beerContainer;
  this.beer = beer;
};

BeerWrapperView.prototype.render = function () {
  const infoHeading = document.createElement("h1");
  infoHeading.textContent = `${this.beer.name}`;
  this.beerContainer.appendChild(infoHeading);

  const infoLiA = document.createElement("li");
  infoLiA.textContent = `${this.beer.description}`;
  this.beerContainer.appendChild(infoLiA);
};

module.exports = BeerWrapperView;
