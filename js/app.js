'use strict';
//var clicksOnImage = document.getElementById('list');
var firstPic = document.getElementById('firstpic');
var secondPic = document.getElementById('secondpic');
var thirdPic = document.getElementById('thirdpic');
var allItems = [];
var numTotalClicks = 0;
var labels = [];
var voteLabels = [];

function Items(name,filepath) {
  this.filepath = filepath;/*`img/${name}.jpg`;*/
  this.name = name;
  this.views = 0;
  this.clicks = 0;
  allItems.push(this); 
}

new Items('bag','img/bag.jpg');
new Items('banana','img/banana.jpg');
new Items('bathroom','img/bathroom.jpg');
new Items('boots','img/boots.jpg');
new Items('breakfast','img/breakfast.jpg');
new Items('bubblegum','img/bubblegum.jpg');
new Items('chair','img/chair.jpg');
new Items('cthulhu','img/cthulhu.jpg');
new Items('dog-duck','img/dog-duck.jpg');
new Items('dragon','img/dragon.jpg');
new Items('pen','img/pen.jpg');
new Items('pet-sweep','img/pet-sweep.jpg');
new Items('scissors','img/scissors.jpg');
new Items('shark','img/shark.jpg');
new Items('sweep','img/sweep.png');
new Items ('tauntaun','img/tauntaun.jpg');
new Items('unicorn','img/unicorn.jpg');
new Items('usb','img/usb.gif');
new Items('water-can','img/water-can.jpg');
new Items('wine-glass','img/wine-glass.jpg');



//function to show the three pictures.

function itemRandom(){
  var random1 = Math.floor(Math.random()*allItems.length);
  firstPic.src = allItems[random1].filepath;
  firstPic.alt = allItems[random1].name;
  firstPic.title = allItems[random1].name;
  allItems[random1].views++;
  allItems[random1].clicks++;
  
  //picture 2 has to be different than picture 1.
  var random2 = Math.floor(Math.random()*allItems.length);
  while (random2 === random1) {
    random2 = Math.floor(Math.random()*allItems.length);
  }
  secondPic.src = allItems[random2].filepath;
  secondPic.alt = allItems[random2].name;
  secondPic.title = allItems[random2].name;
  allItems[random2].views+=1;
  allItems[random2].clicks++;
  
  //picture 3 has to be different than picture 1 and 2.
  var random3 = Math.floor(Math.random()*allItems.length);
  while (random3 === random1 || random3 === random2){
    random3 = Math.floor(Math.random()* allItems.length);
  }
  thirdPic.src = allItems[random3].filepath;
  thirdPic.alt = allItems[random3].name;
  thirdPic.title = allItems[random3].name;
  allItems[random3].views++;
  allItems[random3].clicks++;
  console.log(allItems[random3].views);
}

itemRandom();

function tallyVote(thissong) {
  for (var i = 0; i < allItems.length; i++){
    if (thissong === allItems[i].identifier){
      allItems[i].clicks++;
    }
  }
}


var clicks =[];
var views = [];
function itemsAsList (){
  var itemList = document.getElementById('list');

  itemList.innerHTML = '';
  
  for (var i = 0; i < allItems.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = allItems[i].name + ', ' + allItems[i].views + ' views '+ allItems[i].clicks +' clicks.';

    itemList.appendChild(liEl);

  }
}


/*function makeChart() {
  var ctx = document.getElementById('myChart');

  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'BusMall Survey Results',
        data: voteLabels,
        backgroundColor:'#00BFD0',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Item Types'
          }
        }],
        yAxes: [{
          ticks: {
            max: 4,
            min: 0,
            stepSize: 1,
          }
        }]
      }
    }
  });
 
}*/


secondPic.addEventListener('click', handleClick);
firstPic.addEventListener('click', handleClick);
thirdPic.addEventListener('click', handleClick);

/*document.getElementById('chart').addEventListener('click', function(){
  makeChart();
});*/

document.getElementById('list');addEventListener('click',function(){
  itemsAsList();
});

document.getElementById('pics').addEventListener('click', function(event){
  tallyVote(event.target.id);
} );

function handleClick() {
  console.log('target, ', event.target);

  itemRandom();

}

