var readlineSync = require('readline-sync');
var naive = require('./naive.js');

var text = 'abcdefghijkmnfgh';
var pattern = 'fgh';

naive.naive(text, pattern);