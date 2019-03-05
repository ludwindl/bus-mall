'use strict';

var firstPic = document.getElementById('firstpic');
var secondPic = document.getElementById('secondpic');
var thirdPic = document.getElementById('thirdpic');
var allItems = [];

function Items(name) {
  this.filepath = `img/${name}.jpg`;
  this.name = name;
  this.views = 0;
  allItems.push(this);

}

new Items('bag');
new Items('banana');
new Items('bathroom');
new Items('boots');
new Items('breakfast');
new Items('bubblegum');
new Items('chair');
new Items('cthulhu');
new Items('dog-duck');
new Items('dragon');
new Items('pen');
new Items('pet-sweep');
new Items('scissors');
new Items('shark');
new Items('sweep');
new Items ('tauntaun');
new Items('unicorn');
new Items('usb');
new Items('water-can');
new Items('wine-glass');

function itemRandom(){
  var random1 = Math.floor(Math.random()*allItems.length);
  firstPic.src = allItems[random1].filepath;
  firstPic.alt = allItems[random1].name;
  firstPic.title = allItems[random1].name;
  allItems[random1].views++;

  var random2 = Math.floor(Math.random()*allItems.length);
  while (random2 === random1) {
    random2 = Math.floor(Math.random()*allItems.length);
  }
  secondPic.src = allItems[random2].filepath;
  secondPic.alt = allItems[random2].name;
  secondPic.title = allItems[random2].name;
  allItems[random2].views++; 

  var random3 = Math.floor(Math.random()*allItems.length);
  while (random3 === random1 || random3 === random2){
    random3 = Math.floor(Math.random()* allItems.length);
  }
  thirdPic.src = allItems[random3].filepath;
  thirdPic.alt = allItems[random3].name;
  thirdPic.title = allItems[random3].name;
  allItems[random3].views++;

}
itemRandom();



secondPic.addEventListener('click', handleClick);
firstPic.addEventListener('click', handleClick);
thirdPic.addEventListener('click', handleClick);
function handleClick(event) {
  console.log('target, ', event.target);
  itemRandom();

}

