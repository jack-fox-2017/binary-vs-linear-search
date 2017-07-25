var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

// suite.add('foo', {
//   defer: true,
//   fn: function (deferred) {
//     setTimeout(function() {
//       deferred.resolve();
//     }, 200);
//   }
// }).on('complete', function () {
//   console.log(this[0].stats)
// }).run()


// add tests
suite.add('RegExp#test', function() {
  /o/.test('Hello World!');
})
.add('String#indexOf', function() {
  'Hello World!'.indexOf('o') > -1;
})
.add('String#match', function() {
  !!'Hello World!'.match(/o/);
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
