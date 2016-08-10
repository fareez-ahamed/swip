const program = require('commander');
const inquirer = require('inquirer');

program
  .version('0.0.1')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq-sauce', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble');

program
  .command('add [name]')
  .description('Add a new proxy')
  .action(function(name, options){
  	//Ask details using inquirer
    console.log('Adding new proxy to file', name);
  });

program.parse(process.argv);