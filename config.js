/**
 * config is a singleton object to store and load config
 */
const fs = require('fs');

module.exports = {

	path : process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME']+'/'+'.swiprc',

	load : function() {
		try {
			this.configObj = JSON.parse(fs.readFileSync(this.path, 'utf8'));	
		} catch(e) {
			this.configObj = {
				proxies : {}
			};
		}
		
	},

	getProxyList : function() {
		return this.configObj.proxies.keys();
	},

	setProxy : function(name, object) {
		this.configObj[name] = object;
	},

	getProxy : function(name) {
		return this.configObj[name];
	},

	save : function() {
		try {
			fs.writeFileSync(this.path, JSON.stringify(this.configObj), 'utf8');
		} catch(e) {
			console.log('Unable to write to config file');
			process.exit();
		}
	}
	
};