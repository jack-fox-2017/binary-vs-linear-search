'use strict'

let Benchmark = require('benchmark');
let suite = new Benchmark.Suite;

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
  let newArr = [];
  while(arr.length != 0){
    let min = Math.min(...arr);
    newArr.push(min);
    arr.splice(arr.indexOf(min),1);
  }
  //console.log(newArr);
  return newArr;
}

function binary_search (search, array) {
  // Your searching code
  //console.log(array);
  let top = 0;
  let bot = array.length-1;
  let found = false;
  let mid = 0;
  while(bot-top >= 0 && !found){
    mid = Math.floor((top+bot)/2);
    // console.log('top:', top);
    // console.log('bot:', bot);
    // console.log('mid:', mid);
    // console.log('arr mid:',array[mid]);
    if(array[mid]==search){
      found = true;
    }else {
      if(array[mid]<search){
        top = mid+1;
      }else {
        bot = mid-1;
      }
    }
  }
  if(found){
    return mid;
  }
  return -1;
}

function crArrSeribu() {
  let arr = [];
  for(let i=0; i<1000; i++){
    arr.push(Math.floor(Math.random() * 1000));
  }
  return arr;
}

function crArrSepuluhRibu() {
  let arr = [];
  for(let i=0; i<10000; i++){
    arr.push(Math.floor(Math.random() * 1000));
  }
  return arr;
}

function crArrSejuta() {
  let arr = [];
  for(let i=0; i<1000000; i++){
    arr.push(Math.floor(Math.random() * 1000));
  }
  return arr;
}
var seribu = crArrSeribu();
// console.log(seribu);
var sepRibu = crArrSepuluhRibu();
var sejuta = crArrSejuta();

var ribuSort = ownSort(crArrSeribu);
var pulRibuSort = ownSort(crArrSepuluhRibu);
var jutaSort = ownSort(crArrSejuta);

// var arrayGenapSorted = ownSort(testArrayGenap);
// var arrayGanjilSorted = ownSort(testArrayGanjil);

// // Driver code
suite.add('linear seribu', () => {
  linearSearch(555, seribu);
});
suite.add('binary seribu', () => {
  binary_search(555, ribuSort);
});
suite.add('linear sepuluhribu', () => {
  linearSearch(555, sepRibu);
});
suite.add('binary sepuluhribu', () => {
  binary_search(555, pulRibuSort);
});
suite.add('linear sejuta', () => {
  linearSearch(555, sejuta);
});
suite.add('binary sejuta', () => {
  binary_search(555, jutaSort);
});

suite.on('cycle', function(event) {
  console.log(String(event.target));
})
suite.on('complete', function() {
  console.log('Tercepat adalah ',this.filter('fastest').map('name'));
})
// run async
suite.run({ 'async': true });

module.exports = {
  linearSearch,
  binary_search
}
