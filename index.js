const program = require('commander');
const prompt  = require('prompt');
const config  = require('./config');

loadConfig();

program
  .version('0.0.1');

/**
 *	Add a new proxy by giving a name
 */
program
  .command('add <name>')
  .description('Add a new proxy')
  .action(function(name, options){
  	
  });

//Start parsing the argument
program.parse(process.argv);

if (!program.args.length) program.help();

function loadConfig() {
	try{
		config.load();	
	} catch(e) {
		console.log("Config file not found");
		process.exit();
	}
}