const PubSub = require("../helpers/pub_sub.js");

const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe("beer list data is ready"  , (event) =>{
    const allBeerData = event.detail;
    // console.log(allBeerData);
    // console.log('data received');
    this.populate(allBeerData);
    // console.log(this.populate);
  });

  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    console.log(selectedIndex);
    // console.log('one thing');
    PubSub.publish('SelectView:change', selectedIndex);
  });

};


SelectView.prototype.populate = function(beersData){
  beersData.forEach((beer, index) => {
    const option = document.createElement('option');
    option.textContent = beer.name;
    option.value = index;
    this.element.appendChild(option);
  });
};




module.exports = SelectView;
