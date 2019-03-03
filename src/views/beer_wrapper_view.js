const BeerWrapperView = function(beerContainer, beer) {
  this.beerContainer = beerContainer;
  this.beer = beer;
};

BeerWrapperView.prototype.render = function () {
  const infoHeading = document.createElement("h2");
  infoHeading.textContent = `${this.beer.name}`;
  this.beerContainer.appendChild(infoHeading);

  const infoLiA = document.createElement("li");
  infoLiA.textContent = `${this.beer.description}`;
  this.beerContainer.appendChild(infoLiA);

  const infoLiB = document.createElement("li");
  infoLiB.textContent = `${this.beer.first_brewed}`;
  this.beerContainer.appendChild(infoLiB);

  const infoLiC = document.createElement("li");
  infoLiC.textContent = `${this.beer.tagline}`;
  this.beerContainer.appendChild(infoLiC);

  const infoLiD = document.createElement("img");
  infoLiD.classList.add('image-size');
  infoLiD.src = `${this.beer.image_url}`;
  this.beerContainer.appendChild(infoLiD);
};

module.exports = BeerWrapperView;
