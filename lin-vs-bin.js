let fs = require('fs');
let Benchmark = require('benchmark');
let suite = new Benchmark.Suite;

let seribuArr = fs.readFileSync('1ribu.txt', 'utf8').split(',')
let sepuluhribuArr = fs.readFileSync('10ribu.txt', 'utf8').split(',')
let sejutaArr = fs.readFileSync('1juta.txt', 'utf8').split(',')

//linear
let linearSearch = (target, values) => {
  //write your code here
  for (let i = 0; i < values.length; i++) {
  	if (values[i] === target)
  		return i
  }
  return -1
}

//binary
let binarySearch = (search, array) => {
  // Your searching code
  var ujungKiri = 0
  var ujungKanan = array.length - 1
  var mid = Math.ceil((ujungKiri + ujungKanan) / 2)

  while (ujungKiri < mid && mid < ujungKanan) {
  // console.log(ujungKiri, mid, ujungKanan);
  	if (search == array[mid]) return mid
  	else if (search == array[ujungKiri]) return ujungKiri
  	else if (search == array[ujungKanan]) return ujungKanan
  	else {
	  	var kiri = search <= array[mid]
	  	var kanan = search <= array[ujungKanan]
  		
  		if (kiri && kanan) {
  			ujungKanan = mid
  		} else {
  			ujungKiri = mid
  		}

  		mid = Math.ceil((ujungKiri + ujungKanan) / 2)
  	}
  }

  return -1;
}

//tests
let seribuTest = 789;
let sepuluhribuTest = 7890;
let sejutaTest = 456456; 

// add tests
suite.add('linear_seribu', () => {
  linearSearch(seribuTest, seribuArr)
})
.add('binary_seribu', () => {
  binarySearch(seribuTest, seribuArr)
})
.add('linear_sepuluhribu', () => {
  linearSearch(sepuluhribuTest, sepuluhribuArr)
})
.add('binary_sepuluhribu', () => {
  binarySearch(sepuluhribuTest, sepuluhribuArr)
})
.add('linear_sejuta', () => {
	linearSearch(sejutaTest, sejutaArr)
})
.add('binary_sejuta', () => {
	binarySearch(sejutaTest, sejutaArr)
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });