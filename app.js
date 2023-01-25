// function sayHello(name){
//     console.log('Hello '+name); //global 
// }

// sayHello('gaurav');

// const logger = require('./logger');

// logger.log('hello');
// console.log(module);

const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);