import chalk from "chalk";
import validator from "validator";


//npm --> node pakage manager

//CHALK 

console.log(chalk.red("text color"));
console.log(chalk.bgRed.bold("text color"));
console.log(
     `CPU : ${chalk.red('90%')}
      RAM : ${chalk.red('80%')}
     DISK : ${chalk.red('97%')}`
);

//VALIDATOR 

console.log(validator.isEmail('shrif8092@gmail.com'));
console.log(validator.isMobilePhone("93060918762", 'en-IN'));
// console.log(validator.isEmail('shrif8092@gmail.com'));