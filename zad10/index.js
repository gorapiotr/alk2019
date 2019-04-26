var readlineSync = require('readline-sync');
var sieve = require('./sieve.js');

var n = readlineSync.question('Okresl tablice danych wejsciowych \n  np. [1, 2 , .... , N ] N: ');
console.log(sieve.sieve(n));