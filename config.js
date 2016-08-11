/**
 * config is a singleton object to store and load config
 */
const fs = require('fs');

module.exports = {

	load : function() {
		var path = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
		this.configObj = JSON.parse(fs.readFileSync(path+'/'+'.swiprc', 'utf8'));
	}
	
};