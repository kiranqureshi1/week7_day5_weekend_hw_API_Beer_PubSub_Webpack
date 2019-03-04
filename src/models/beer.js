const RequestHelper = require("../helpers/request_helpers.js");
const PubSub = require("../helpers/pub_sub.js");



const Beer = function(data) {
  this.data = data;
};

Beer.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6');
  requestHelper.get().then((data) => {
    this.data = data;
    console.log(this.data);
    PubSub.publish("beer list data is ready", this.data);
  });

  PubSub.subscribe('SelectView:change', (event) => {
      const selectedIndex = event.detail;
      console.log(selectedIndex);
      this.publishbeerData(selectedIndex);
    });
};



Beer.prototype.publishbeerData = function(beerIndex){
  const selectedBeer = this.data[beerIndex];
  PubSub.publish('Selected Beer data ready', selectedBeer);
};


//   PubSub.subscribe('SelectView:change', (event) => {
//     const selectedIndex = event.detail;
//     this.publishbeerData(selectedIndex);
//   });
// };
//
// Beer.prototype.publishbeerData = function(beerIndex){
//   const selectedbeer = this.data[beerIndex];
//   PubSub.publish('Selected Beer data ready', selectedBeer);
// };

module.exports = Beer;
