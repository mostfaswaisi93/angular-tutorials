const chalk = require('chalk');
const validator = require('validator');
const getNotes = require('./notes');

const msg = getNotes();

console.log(msg);

const greenMSG = chalk.green('Success')
const redMSG = chalk.red.bold('Error')
const redMSGIn = chalk.red.inverse.bold('Error')
console.log(greenMSG);
console.log(redMSG);
console.log(redMSGIn);

console.log(validator.isEmail('admin@'));
console.log(validator.isURL('https://mead.io'));