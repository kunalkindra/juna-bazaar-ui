import axios from 'axios';

class ServiceManager {
	constructor() {
		this.timeStamp = new Date();
	}
	exec(method, url, params) {
		return axios[method](url, params);
	}
}

module.exports = new ServiceManager();