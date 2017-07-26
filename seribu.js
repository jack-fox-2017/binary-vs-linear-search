'use strict'

const fs = require('fs');

let num = function () {
  let numb = "";
  for (let i = 1; i < 1000; i++) {
    numb += `${i},`;
  }
  return numb;
}

num = num()
  .split(',');
num.pop();
num = num.join(',');

fs.writeFileSync('seribu.txt', num, 'utf8');
