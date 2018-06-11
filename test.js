const assert = require('assert');
const distr = require('./index.js');

const input = [
distr('./flarp/src/html/src/secret/src/index.js'),
distr('./flarp/src/html/src/secret/src/index.js', {limit:2}),
distr('./flarp/src/html/src/secret/src/index.js', {destination:'pow', limit:3}),
distr('./flarp/src/html/src/secret/src/index.js', {source:/flarp|src/, limit:3})
];

const actual = input.map(i=>distr(i));

const expected = [
  './flarp/dist/html/dist/secret/src/index.js',
  './flarp/dist/html/dist/secret/dist/index.js',
  './flarp/pow/html/pow/secret/pow/index.js',
  './dist/dist/html/dist/secret/dist/index.js'
];

assert.deepEqual( actual , expected );
