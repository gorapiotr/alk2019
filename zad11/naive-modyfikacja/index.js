var readlineSync = require('readline-sync');
var naive = require('./naive1.js');

var text = 'abcdefghijkmnfgh';
var pattern = 'fgh';

naive.naive(text, pattern);