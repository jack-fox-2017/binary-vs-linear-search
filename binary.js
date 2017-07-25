'use strict'

let fs = require('fs');
let Benchmark = require('benchmark');
let suite = new Benchmark.Suite;

let seribuArr = fs.readFileSync('1000.txt', 'utf8').split(',')
let sepuluhRibuArr = fs.readFileSync('10000.txt', 'utf8').split(',')
let satuJutaArr = fs.readFileSync('1juta.txt', 'utf8').split(',')

// Linear Search
let linearSearch = (target, values) => {
  //write your code here
  for (var i = 0; i < values.length; i++) {
    if (values[i] === target) {
      return i;
    }
  }
  return -1;
}

function ownSort(arr) {
  // Your sorting code
  var temp = 0;
  for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr
}

function binary_search (search, array) {
  // Your searching code
  var midIndex = 0;
  var lowIndex = 0;
  var maxIndex = array.length-1;

  while (lowIndex<=maxIndex) {
    midIndex = Math.floor(((lowIndex + maxIndex)/2));
    var midElement = array[midIndex];
    if(midElement < search) {
      lowIndex = midIndex + 1;
    } else if (midElement > search) {
      maxIndex = midIndex - 1;
    } else {
      return midIndex
    }

  }
  return -1
}


var arraySeribu = ownSort(seribuArr)
var arraySepuluhRibu = ownSort(sepuluhRibuArr)
//var arraySatuJuta = ownSort(satuJutaArr)

// add Test case
// ribuan
suite.add('Test linear seribu: ', () => {
  linearSearch(300, seribuArr)
})
suite.add('Test binary seribu: ', () => {
  binary_search(300, arraySeribu)
})
// puluhan ribu
suite.add('Test linear 10 Ribu ', () => {
  linearSearch(300, sepuluhRibuArr)
})
suite.add('Test binary 10 Ribu ', () => {
  binary_search(300, arraySepuluhRibu)
})
//Jutaan
suite.add('Test linear 1 juta ', () => {
  linearSearch(300, satuJutaArr)
})
suite.add('Test binary 1 juta ', () => {
  binary_search(300, satuJutaArr)
})

// add listeners
suite.on('cycle', function(event) {
  console.log(String(event.target));
})
suite.on('complete', function() {
  console.log('Tercepat ' + this.filter('fastest').map('name'));
})
// run async
suite.run({ 'async': true });
