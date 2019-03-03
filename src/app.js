const Beer = require("./models/beer.js");
const BeerListView = require("./views/beer_list_view.js");
const SelectView = require("./views/select_view.js");
const SingleBeerView = require("./views/single_bear_view.js");




document.addEventListener('DOMContentLoaded', () =>{
  console.log("javaScript loaded");

  const infodiv = document.querySelector('#detail');
  const beerListView = new BeerListView(infodiv);
  // console.log(beerListView);
  beerListView.bindEvents();


  const infodivB = document.querySelector('#singdetail');
  const singleBeerView = new SingleBeerView(infodivB);
  // console.log(singleBeerView);
  singleBeerView.bindEvents();



  const infodivA = document.querySelector('#dropdown');
  const selectView = new SelectView(infodivA);
  // console.log(selectView);
  selectView.bindEvents();


  const beer = new Beer();
  beer.getData();
});
