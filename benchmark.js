const fs = require('fs');
const Benchmark = require('benchmark');

let linearSearch = (target, values) => {
  //write your code here
  for (var i = 0; i < values.length; i++) {
    if (target == values[i]) {
      return +i
    }
    else {
      return -1;
    }
  }
}

///////

function binarySearch(search, array, start = 0, end = array.length - 1) {
  // Your searching code

  let mid = Math.floor((start + end) / 2);
  if (end < start) {
    return -1;
  }
  else if (search > array[mid]) {
    return binarySearch(search, array, mid + 1, end);
  }
  else if (search < array[mid]) {
    return binarySearch(search, array, start, mid - 1);
  }
  else {
    return mid;
  }
}

var arrsribu = fs.readFileSync('seribu.txt', 'utf-8');
arrsejuta = arrsribu.replace(/\n$/, "")
  .split(',');
let seributest = 777

var arrsejuta = fs.readFileSync('sepuluhribu.txt', 'utf-8');
arrsepuluhribu = arrsejuta.replace(/\n$/, "")
  .split(',');
let sepuluhributest = 7777

var arrsejuta = fs.readFileSync('1juta.txt', 'utf-8');
arrsejuta = arrsejuta.replace(/\n$/, "")
  .split(',');
let sejutatest = 777777



var suite = new Benchmark.Suite;

suite
  .add('linearSearch#1juta', function () {
    linearSearch(arrsejuta, sejutatest);
  })
  .add('binarySearch#1juta', function () {
    binarySearch(arrsejuta, sejutatest);
  })
  // add listeners
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('yang menang' + this.filter('fastest')
      .map('name'));
  })
  // run async
  .run({
    'async': true
  });
