const program = require('commander');
const prompt  = require('prompt');
const config  = require('./config');

loadConfig();

program
  .version('0.0.1');

/**
 * List all the proxies available
 */
program
  .command('ls')
  .description('List proxies')
  .action(function() {
  	for (var i = 0; i < config.getProxyList().length; i++) {
  		console.log(config.getProxyList()[i]);
  	}
  });

/**
 *	Add a new proxy by giving a name
 */
program
  .command('add <name>')
  .description('Add a new proxy')
  .action(function(name, options){
    prompt.get(['http-proxy','https-proxy'],function(err, result){
    	config.setProxy(name,result);
    	config.save();
    });
  });

program
  .command('*')
  .action(function(cmd) {
      if(config.hasProxy(cmd)) {
        config.activateProxy(cmd); 
      }
      else {
        console.log('No proxy found with that name');
      }
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