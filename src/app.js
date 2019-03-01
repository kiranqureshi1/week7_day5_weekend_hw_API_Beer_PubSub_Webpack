const Beer = require("./models/beer.js");
const BeerListView = require("./views/beer_list_view.js");




document.addEventListener('DOMContentLoaded', () =>{
  console.log("javaScript loaded");

  const infodiv = document.querySelector('#detail');
  const beerListView = new BeerListView(infodiv);
  beerListView.bindEvents();

  const beer = new Beer();
  beer.getData();
});
