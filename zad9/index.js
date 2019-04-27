var readlineSync = require('readline-sync');
var postageStamps = require('./postage-stamp.js');

var postStamps = readlineSync.question('Podaj liczbe nominalow: ');
var spots = readlineSync.question('Podaj liczbe miejsc ');

console.log('Zakres oplat pocztowych', postageStamps.postageStampsProblem(postStamps, spots));