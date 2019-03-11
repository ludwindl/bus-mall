'use strict';

var allItems = [];

var clicksOnImage = document.getElementById('outsidepic');

var results = document.getElementById('resultsbutton');

var numberOfClicks = [];

var itemLabels = [];

var voteLabels = [];



var Items = function(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.votes = 0;
  this.displayed = 0;
  allItems.push(this);
};

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


function randomPic() {
  return Math.floor(Math.random() * allItems.length);
}

function displayImages() {
  var imageLeft = randomPic();
  var imageCenter = randomPic();
  var imageRight = randomPic();

  while (imageCenter === imageLeft) {
    imageCenter = randomPic();
  }

  while (imageRight === imageCenter || imageRight === imageLeft) {
    imageRight = randomPic();
  }

  var firstImage = document.getElementById('image1');
  firstImage.src = allItems[imageLeft].filepath;
  firstImage.alt = allItems[imageLeft].name;

  var secondImage = document.getElementById('image2');
  secondImage.src = allItems[imageCenter].filepath;
  secondImage.alt = allItems[imageCenter].name;

  var thirdImage = document.getElementById('image3');
  thirdImage.src = allItems[imageRight].filepath;
  thirdImage.alt = allItems[imageRight].name;
}

displayImages();

function clicks(event) {
  var imageId = event.target.id;
  var imageAlt = event.target.alt;

  if (imageId === 'outsidepic') {
    alert('Please click on an image to vote!');
  } else if (numberOfClicks < 25) {
    for (var i = 0; i < allItems.length; i++) {
      if(imageAlt === allItems[i].name) {
        allItems[i].votes += 1;
        numberOfClicks++;
      }
      if (numberOfClicks === 25) {
        document.getElementById('resultsbutton');
        resultsbutton.style.visibility = 'visible';
      } else {
        document.getElementById('resultsbutton');
        resultsbutton.style.visibility = 'hidden';
        displayImages();
      }
    }
  }
}



function updateChart() {
  for (var i = 0; i < allItems.length; i++) {
    itemLabels.push(allItems[i].name);
    voteLabels.push(allItems[i].votes);
  }
}

function makeChart() {
  updateChart();
  var ctx = document.getElementById('chart');

  var chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: itemLabels,
      datasets: [{
        label: 'Product Survey Results',
        data: voteLabels,
        backgroundColor:'red',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Products'
          }
        }],
        yAxes: [{
          ticks: {
            max: 5,
            min: 0,
            stepSize: 1,
          }
        }]
      }
    }
  });
}

clicksOnImage.addEventListener('click', clicks);
results.addEventListener('click', makeChart);
