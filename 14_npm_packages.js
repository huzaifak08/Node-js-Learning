const chalk = require('chalk');
const validator = require('validator');

console.log(chalk.blue.underline('Hello world'));

const res = validator.isEmail('huzaifa@gmail.com');
console.log(res);